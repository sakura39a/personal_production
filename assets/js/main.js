$(function(){
  $('.slider').slick({
    autoplay: true, // �����ŃX�N���[��
    autoplaySpeed: 3800, // �����Đ��̃X���C�h�؂�ւ��܂ł̎��Ԃ�ݒ�
    speed: 500, // �X���C�h������鑬�x��ݒ�
    cssEase: "ease", // �X���C�h�̗�����𓙑��ɐݒ�
    slidesToShow: 3, // �\������X���C�h�̐�
    swipe: true, // ����ɂ��؂�ւ��͂����Ȃ�
    arrows: false, // ����\��
    centerMode: true,
    touchMove: true,
    touchThreshold: 50,
    dots: true,
    waitForAnimate: false,
    focusOnSelect: false,
    pauseOnFocus: false, // �X���C�_�[���t�H�[�J�X�������ɃX���C�h���~�����邩
    pauseOnHover: false, // �X���C�_�[�Ƀ}�E�X�z�o�[�������ɃX���C�h���~�����邩
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
          slidesToShow: 1, // ��ʕ�750px�ȉ��ŃX���C�h3���\��
        }
      }
    ]
  });
});
    