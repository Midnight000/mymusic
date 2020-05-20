#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os
def readname():
    filePath = '/mysites/music/pieces'
    name = os.listdir(filePath)
    return name

name = readname()

namelist = open("/mysites/music/namestring/namelist.txt", "w", encoding="utf-8")
singerlist = open("/mysites/music/namestring/singerlist.txt", "w", encoding="utf-8")
songsource = open("/mysites/music/namestring/songsource.txt", "w", encoding="utf-8")
flag=0;
for i in name:
    tmp=i.split('-')
    singer = "\"" + tmp[0] + "\""
    song = "\"" + tmp[1].split('.')[0] + "\""
    i = "\"../pieces/" + i + "\""
    if flag==1:
        namelist.write(",")
        singerlist.write(",")
        songsource.write(",")
    namelist.write(song)
    singerlist.write(singer)
    songsource.write(i)
    flag=1;
