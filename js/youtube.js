// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // 함수이름 변경하면 안됨
  // 여기서 선택자를 할때 #을 적지 않아도 player라는 아이디를 찾음
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 유튜브 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 ID 목록
    },
    events: {
      onReady: function(event){
        event.target.mute() // .target(해당 동영상) .mute() 음소거
      }
    }
  });
}