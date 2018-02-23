   function localtunnel {
      lt -s --port 5000 --subdomain https://5jtj8ugjd4jirf6
    }
    until localtunnel; do
    echo "localtunnel server crashed"
    sleep 2
    done