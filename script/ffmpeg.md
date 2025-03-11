# FFmpeg
## 简介
ffmpeg 是一个强大的多媒体处理工具，支持直接处理 M3U8 文件并将其转换为 MP4。FFmpeg 本地已经安装

## 使用说明
本地已经添加环境变量，执行命令：
```
ffmpeg -allowed_extensions ALL -protocol_whitelist "file,http,https,tcp,tls,crypto" -i input.m3u8 -c copy output.mp4
```
加参数 `-allowed_extensions ALL` 是因为默认会限制加载非多媒体文件（如 .key 文件），以防止潜在的安全风险。如果不加，就会解析报错。