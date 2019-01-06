
package main
import (
  "fmt"
  "net/url"
  "net/http"
)
func main() {
  http.HandleFunc("/login", func (w http.ResponseWriter, r *http.Request) {
    qs := url.Values{}
    qs.Add("key", "APP_ID")
    qs.Add("secret", "APP_SECRET")
    qs.Add("scope", "repo user gist")
    qs.Add("transport", "querystring")
    qs.Add("callback", "http://localhost:4000/hello")
    http.Redirect(w, r, "http://localhost:3000/connect/github/proxy?" + qs.Encode(), 301)
  })
  http.HandleFunc("/hello", func (w http.ResponseWriter, r *http.Request) {
    qs, _ := url.ParseQuery(r.URL.RawQuery)
    fmt.Println(qs["access_token"][0])
    w.Write([]byte("nice!"))
  })
  http.ListenAndServe(":4000", nil)
}
