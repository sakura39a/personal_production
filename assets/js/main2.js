$(function(){
  $('.slider').slick({
    autoplay: true, // �����ŃX�N���[��
    autoplaySpeed: 0, // �����Đ��̃X���C�h�؂�ւ��܂ł̎��Ԃ�ݒ�
    speed: 5000, // �X���C�h������鑬�x��ݒ�
    cssEase: "linear", // �X���C�h�̗�����𓙑��ɐݒ�
    slidesToShow: 4, // �\������X���C�h�̐�
    swipe: false, // ����ɂ��؂�ւ��͂����Ȃ�
    arrows: false, // ����\��
    centerMode: false,
    touchMove: false,
    touchThreshold: 20,
    waitForAnimate: false,
    focusOnSelect: false,
    pauseOnFocus: false, // �X���C�_�[���t�H�[�J�X�������ɃX���C�h���~�����邩
    pauseOnHover: false, // �X���C�_�[�Ƀ}�E�X�z�o�[�������ɃX���C�h���~�����邩
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3, // ��ʕ�750px�ȉ��ŃX���C�h3���\��
        }
      }
    ]
  });
});
    