var songName = document.getElementById("songname");
var singerName = document.getElementById("singername");
var musicImage = document.getElementsByClassName("song_img")[0];
var musicList = document.getElementsByTagName("li");
var musicNode = document.getElementsByTagName("audio")[0];




//行数不可动
var musicSrcList = ["../pieces/陈奕迅,eason and the duo band - 我们万岁.mp3","../pieces/焦迈奇 - 我欢喜喜欢你.mp3","../pieces/李荣浩 - 戒烟.mp3","../pieces/周杰伦 - 分裂.mp3","../pieces/将故事写成我们-林俊杰-ringtone.mp3","../pieces/谢春花 - 借我.mp3","../pieces/华晨宇 - 我(live版).mp3","../pieces/陈鸿宇 - 理想三旬.mp3","../pieces/华晨宇 - 好想爱这个世界啊.mp3","../pieces/华晨宇 - 你要相信这不是最后一天.mp3","../pieces/汪苏泷 - 忽而今夏.mp3","../pieces/陈奕迅,eason and the duo band - 可一可再.mp3","../pieces/林俊杰 - 将故事写成我们.mp3","../pieces/陈奕迅,eason and the duo band - 龙舌兰.mp3","../pieces/痛仰乐队 - 公路之歌.mp3","../pieces/华晨宇 - 与火星的孩子对话.mp3","../pieces/陈奕迅,eason and the duo band - 与你常在.mp3","../pieces/神山羊 - YELLOW.mp3","../pieces/华晨宇 - 疯人院.mp3","../pieces/华晨宇 - 七重人格.mp3","../pieces/JABBERLOOP - ソレソレ.mp3","../pieces/五月天 - 如烟.mp3","../pieces/NINEONE - PUMA.mp3","../pieces/华晨宇 - 神树.mp3","../pieces/NINEONE# - 风的颜色.mp3","../pieces/傅如乔 - 微微.mp3","../pieces/不亦六乎 - 勾指起誓(cover洛天依)（Cover：ilem）.mp3","../pieces/塞壬唱片-MSR,横山克 - 春弦.mp3","../pieces/Aquilo - You There.mp3","../pieces/Vicky - December Composer.mp3","../pieces/Marshmello - Alone.mp3","../pieces/华晨宇 - 降临.mp3","../pieces/五月天 - 拥抱.mp3","../pieces/NINEONE - I don't wanna see u anymore.mp3","../pieces/华晨宇 - 斗牛.mp3","../pieces/痛仰乐队 - 扎西德勒.mp3","../pieces/Barcelona - Midnight.mp3","../pieces/张韶涵 - 亲爱的那不是爱情 (Live).mp3","../pieces/华晨宇 - 新世界.mp3","../pieces/卜冠今 - 在青春里遇见.mp3","../pieces/五月天 - 星空.mp3","../pieces/陈粒 - 光.mp3","../pieces/五月天 - 盛夏光年.mp3","../pieces/Jony J - 不用去猜.mp3","../pieces/痛仰乐队 - 再见杰克.mp3"];
var musicImageList = [];
var singerNameList = ["陈奕迅,eason and the duo band ","焦迈奇 ","李荣浩 ","周杰伦 ","将故事写成我们","谢春花 ","华晨宇 ","陈鸿宇 ","华晨宇 ","华晨宇 ","汪苏泷 ","陈奕迅,eason and the duo band ","林俊杰 ","陈奕迅,eason and the duo band ","痛仰乐队 ","华晨宇 ","陈奕迅,eason and the duo band ","神山羊 ","华晨宇 ","华晨宇 ","JABBERLOOP ","五月天 ","NINEONE ","华晨宇 ","NINEONE# ","傅如乔 ","不亦六乎 ","塞壬唱片","Aquilo ","Vicky ","Marshmello ","华晨宇 ","五月天 ","NINEONE ","华晨宇 ","痛仰乐队 ","Barcelona ","张韶涵 ","华晨宇 ","卜冠今 ","五月天 ","陈粒 ","五月天 ","Jony J ","痛仰乐队 "];
var songNameList = [" 我们万岁"," 我欢喜喜欢你"," 戒烟"," 分裂","林俊杰"," 借我"," 我(live版)"," 理想三旬"," 好想爱这个世界啊"," 你要相信这不是最后一天"," 忽而今夏"," 可一可再"," 将故事写成我们"," 龙舌兰"," 公路之歌"," 与火星的孩子对话"," 与你常在"," YELLOW"," 疯人院"," 七重人格"," ソレソレ"," 如烟"," PUMA"," 神树"," 风的颜色"," 微微"," 勾指起誓(cover洛天依)（Cover：ilem）","MSR,横山克 "," You There"," December Composer"," Alone"," 降临"," 拥抱"," I don't wanna see u anymore"," 斗牛"," 扎西德勒"," Midnight"," 亲爱的那不是爱情 (Live)"," 新世界"," 在青春里遇见"," 星空"," 光"," 盛夏光年"," 不用去猜"," 再见杰克"];
//行数不可动

var len = musicSrcList.length;
var playing;
var outFrame=document.getElementsByClassName("outframe")[0];
var lockIcon=document.getElementsByClassName("lock_img")[0];
var locking=false;
var locker;
var currentTime=document.getElementsByClassName("song_now_time")[0];
var fullTime=document.getElementsByClassName("song_complete_time")[0];
var musicTimer;
var barFollow=true;
var timeFollow=true;
var controlIcon=document.getElementsByClassName("con_c_img");
var processScroll = document.getElementsByClassName("process_scroll")[0];
var processBar = processScroll.children[0];
var processMask = processScroll.children[1];
var volumeScroll = document.getElementsByClassName("volume_scroll")[0];
var volumeBar = volumeScroll.children[0];
var volumeMask = volumeScroll.children[1];
//初始化
volumeMask.style.width=100+"px";
volumeBar.style.left=100+"px";
update(0);
changeIcon(1);
if(!musicNode.paused)changeIcon(0);
//初始化
function changeIcon(x){
  if(x===0)controlIcon[1].src="../iconimg/pause.png";
  else controlIcon[1].src="../iconimg/play.png";
}
//更新当前播放歌曲信息
lockIcon.onclick=function (event) {
  if(locking===false)
  {
    lockIcon.src="../iconimg/padlock.png";
    locking=true;
    outFrame.style.bottom="-20px";
  }
  else
  {
    lockIcon.src="../iconimg/open-padlock.png";
    locking=false;
    outFrame.style.bottom="-90px";
  }
}
function update(index){
  songName.innerHTML = songNameList[index];
  singerName.innerHTML = singerNameList[index];
  musicNode.src = musicSrcList[index];
  musicImage.src = "../musicimg/timg.jpg";
  musicNode.load();
  musicNode.play();
  changeIcon(0);
  playing=index;
  clearInterval(musicTimer);
  musicTimer=setInterval(function(){
      setTimeAndProcess();
    },10)
}
//定义设定当前歌曲时间
function setTimeAndProcess(){
  var tmp=musicNode.duration;
  var sec=Math.floor(tmp%60),fen=Math.floor(tmp/60);
  fullTime.innerHTML=(fen>9?fen:("0"+fen))+":"+(sec>9?sec:("0"+sec));
  tmp=musicNode.currentTime;
  if(timeFollow){
    sec=Math.floor(tmp%60),fen=Math.floor(tmp/60);
    currentTime.innerHTML=(fen>9?fen:("0"+fen))+":"+(sec>9?sec:("0"+sec));
  }
  if(barFollow) {
    var proportion = tmp / musicNode.duration;
    processBar.style.left = proportion * processScroll.offsetWidth + "px";
    processMask.style.width = processBar.style.left;
  }
}

//定义控件点击动作
controlIcon[0].onclick=function(){
  playing--;
  if(playing===-1)playing=len-1;
  update(playing);
}
controlIcon[1].onclick=function(){
  if(musicNode.paused) {
    musicNode.play();
    changeIcon(0);
    musicTimer=setInterval(function(){
      setTimeAndProcess();
    },10)
  }
  else{
    musicNode.pause();
    changeIcon(1);
    clearInterval(musicTimer);
  }
}
controlIcon[2].onclick=function(){
  playing++;
  if (playing === len) playing = 0;
  update(playing);
}
/*for (var i = 0; i < len; i++) {
  (function (i) {
    musicList[i].onclick = function () {
      if(playing===i)return;
      update(i);
    }
  })(i);
}*/
//定义播放完动作
musicNode.onended=function () {
  playing++;
  if (playing === len) playing = 0;
  update(playing);
}
// 定义拖动条组件
processScroll.onmousemove=function (event){
  timeFollow=false;
  var e=event||window.event;
  var leftLen;
  leftLen=e.clientX-2-processScroll.offsetLeft;
  if(leftLen<0)leftLen=0;
  if(leftLen>processScroll.offsetWidth)leftLen=processScroll.offsetWidth
  var tmp=musicNode.duration*(leftLen/processScroll.offsetWidth);
  var sec=Math.floor(tmp%60),fen=Math.floor(tmp/60);
  currentTime.innerHTML=(fen>9?fen:("0"+fen))+":"+(sec>9?sec:("0"+sec));

  this.onmouseleave=function () {
    timeFollow=true;
    var tmp=musicNode.currentTime;
    var sec=Math.floor(tmp%60),fen=Math.floor(tmp/60);
    currentTime.innerHTML=(fen>9?fen:("0"+fen))+":"+(sec>9?sec:("0"+sec));
  }
}
processScroll.onmousedown=function (event) {
  barFollow=false;
  timeFollow=false;
  var e=event||window.event;
  var barr=processBar;
  var leftLen;
  leftLen=e.clientX-2-processScroll.offsetLeft;
  barr.style.left=leftLen+"px";
  if(leftLen<0)barr.style.left="0";
  else if(leftLen>processScroll.offsetWidth)barr.style.left=processScroll.offsetWidth+"px";
  processMask.style.width=barr.style.left;
  document.onmousemove=function(event){
    var e=event||window.event;
    leftLen=e.clientX-2-processScroll.offsetLeft;
    barr.style.left=leftLen+"px";
    if(leftLen<0)barr.style.left="0";
    else if(leftLen>processScroll.offsetWidth)barr.style.left=processScroll.offsetWidth+"px";
    processMask.style.width=barr.style.left;
    if(leftLen<0)leftLen=0;
    else if(leftLen>processScroll.offsetWidth)leftLen=processScroll.offsetWidth;
    var tmp=leftLen/processScroll.offsetWidth*musicNode.duration;
    var sec=Math.floor(tmp%60),fen=Math.floor(tmp/60);
    currentTime.innerHTML=(fen>9?fen:("0"+fen))+":"+(sec>9?sec:("0"+sec));
    window.getSelection ? window.getSelection().removeAllRanges():document.selection.empty();
  }
  var that=this;
  document.onmouseup=function () {
    timeFollow=true;
    if(musicNode.paused)controlIcon[1].onclick();
    musicNode.currentTime=Math.floor(leftLen*musicNode.duration/processScroll.offsetWidth);
    document.onmousemove=null;
    document.onmouseup=null;
    barFollow=true;
  }
}
//定义音量放送
volumeScroll.onmousedown=function (event) {
  set(event);
  function set(e){
    var leftLen=e.clientX-volumeScroll.offsetLeft;
    if(leftLen<0){
      volumeMask.style.width="0"
      volumeBar.style.left="0";
    }
    else if(leftLen>100){
      volumeMask.style.width=100+"px"
      volumeBar.style.left=100+"px";
    }
    else{
      volumeMask.style.width=leftLen+"px"
      volumeBar.style.left=leftLen+"px";
    }
    musicNode.volume=leftLen/100;
  }
  document.onmousemove=function(event){
    set(event);
    window.getSelection ? window.getSelection().removeAllRanges():document.selection.empty();
  }
  document.onmouseup=function (evetn) {
    document.onmousemove=null;
  }
}
