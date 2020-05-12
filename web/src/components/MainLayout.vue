<template>
  <div>
    <b-container id="main-container">
      <b-row>
        <b-col sm="4">
          <b-card title="OpenFaaS Auto Scaling">
            Gateway
            <b-form-input v-model="gateway"></b-form-input>
            <br />Function name
            <b-form-input v-model="fn"></b-form-input>
            <br />POST data
            <b-form-textarea v-model="data" rows="2" max-rows="2"></b-form-textarea>
            <br />
            {{ cps }} calls per second
            <b-form-input id="range-1" v-model="cps" type="range" min="0" max="30"></b-form-input>
            <br />
            <br />
            <b-button v-if="!started" v-on:click="start" href="#" variant="primary">Start</b-button>
            <b-button v-if="started" v-on:click="stop" href="#" variant="secondary">Stop</b-button>
          </b-card>
        </b-col>
        <b-col sm="8">
          <div v-if="info">
            <b-card title="Charts">
              <b>Number of Calls</b>
              <my-chart ref="numCalls"></my-chart>
              <b>Replicas</b>
              <my-chart ref="numReplicas"></my-chart>
              <b>Average Response Time (ms)</b>
              <my-chart ref="avg"></my-chart>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
#main-container {
  margin-top: 20px;
}
</style>

<script>
import MyChart from "@/components/MyChart";

let axios = require("axios");

export default {
  components: {
    MyChart
  },
  data: function() {
    return {
      gateway: "http://10.62.58.182:31112",
      fn: "echo",
      data: "5566",
      cps: 1,
      started: false,
      info: undefined,
      stats: undefined
    };
  },
  mounted: function() {
    this.getInfo();
  },
  methods: {
    start: function() {
      this.stats = [];
      this.started = true;
      this.invoke();
    },
    stop: function() {
      this.started = false;
    },
    getInfo: function() {
      setTimeout(() => {
        this.getInfo();
      }, 2000);

      axios
        .get("http://10.62.58.182:3000/" + this.fn)
        .then(response => {
          this.info = response.data;
        })
        .catch(e => {
          console.log(e);
          this.info = undefined;
        });

      if (this.stats) {
        let buckets = {};
        let startSec = 0;

        for (let i = 0; i < this.stats.length; i++) {
          let entry = this.stats[i];

          let bucket = buckets[entry.sec] || {
            counter: 0,
            ms: 0,
            avg: 0,
            replicas: 0
          };

          bucket.counter++;
          bucket.secOffset = bucket.ms += entry.ms;
          bucket.avg = parseInt(Math.round(bucket.ms / bucket.counter));
          bucket.replicas = Math.max(bucket.replicas, entry.replicas);

          if (i == 0) {
            startSec = entry.sec;
            bucket.secOffset = 0;
          } else {
            bucket.secOffset = entry.sec - startSec;
          }

          buckets[entry.sec] = bucket;
        }

        let labels = [];
        let dataNumCalls = [];
        let dataNumReplicas = [];
        let dataAvg = [];
        Object.keys(buckets).forEach(sec => {
          labels.push(buckets[sec].secOffset);
          dataNumCalls.push(buckets[sec].counter);
          dataNumReplicas.push(buckets[sec].replicas);
          dataAvg.push(buckets[sec].avg);
        });
        this.$refs.numCalls.reload(labels, dataNumCalls);
        this.$refs.numReplicas.reload(labels, dataNumReplicas);
        this.$refs.avg.reload(labels, dataAvg);
      }
    },
    invoke: function() {
      if (!this.started) return;

      setTimeout(() => {
        this.invoke();
      }, 1000);

      for (let i = 0; i < this.cps; i++) {
        let start = new Date().getTime();
        axios
          .post(this.gateway + "/function/" + this.fn, this.data)
          .then(() => {
            let now = new Date().getTime();
            let ms = now - start;

            this.stats.push({
              sec: parseInt(now / 1000),
              ms,
              replicas: this.info.Replicas
            });
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
};
</script>