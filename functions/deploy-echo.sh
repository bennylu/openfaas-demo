sudo faas-cli up -f echo.yml --label com.openfaas.scale.min=1 --label com.openfaas.scale.max=20 --label com.openfaas.scale.zero=true
