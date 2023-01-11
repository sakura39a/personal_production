$(function(){
  $('.slider').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 3800, // 自動再生のスライド切り替えまでの時間を設定
    speed: 500, // スライドが流れる速度を設定
    cssEase: "ease", // スライドの流れ方を等速に設定
    slidesToShow: 3, // 表示するスライドの数
    swipe: true, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    centerMode: true,
    touchMove: true,
    touchThreshold: 50,
    dots: true,
    waitForAnimate: false,
    focusOnSelect: false,
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          },
        },
        {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
});
    