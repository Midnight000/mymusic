package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"os"
)

func handleUpload(w http.ResponseWriter, r *http.Request) {
	file, err := os.Open("./static/upload.html")
	if err != nil {
		fmt.Printf("%v", err)
		return
	}
	data, err := ioutil.ReadAll(file)
	if err != nil {
		fmt.Printf("%v", err)
		return
	}
	w.Write(data)
}

func handlePOST(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		//设置内存大小
		r.ParseMultipartForm(32 << 20)
		//获取上传的第一个文件
		file, header, err := r.FormFile("data")
		if err != nil {
			fmt.Printf("%v", err)
			return
		}
		defer file.Close()
		//创建上传目录
		os.Mkdir("./pieces", os.ModePerm)
		//创建上传文件
		cur, err := os.Create("./pieces/" + header.Filename)
		if err != nil {
			fmt.Printf("%v", err)
			return
		}
		defer cur.Close()
		//把上传文件数据拷贝到我们新建的文件
		io.Copy(cur, file)
	}
	w.Write([]byte(`<script>window.location = "/";</script>`))
}

func main() {
	http.Handle("/", http.FileServer(http.Dir("./pieces")))
	http.HandleFunc("/upload", handleUpload)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	http.HandleFunc("/UP", handlePOST)
	err := http.ListenAndServe(":22222", nil)
	if err != nil {
		fmt.Printf("%v", err)
	}
}
