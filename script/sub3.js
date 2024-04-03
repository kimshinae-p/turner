$(window).scroll(function () {
    var height = $(window).scrollTop();
    var windowHeight = $('.imgbox img').height();
    if (height < windowHeight * 3) {
      $('.listbox ul li:nth-child(1)').addClass('bold');
      $('.textbox_in>div:nth-child(1)').addClass('on');
    } else {
      $('.listbox ul li:nth-child(1)').removeClass('bold');
      $('.textbox_in>div:nth-child(1)').removeClass('on');
    }

    if ((height >= windowHeight * 3) && (height < windowHeight * 5)) {
      $('.listbox ul li:nth-child(2)').addClass('bold');
      $('.textbox_in>div:nth-child(2)').addClass('on');
    } else {
      $('.listbox ul li:nth-child(2)').removeClass('bold');
      $('.textbox_in>div:nth-child(2)').removeClass('on');
    }


    if ((height >= windowHeight * 5) && (height < windowHeight * 6)) {
      $('.listbox ul li:nth-child(3)').addClass('bold');
      $('.textbox_in>div:nth-child(3)').addClass('on');
    } else {
      $('.listbox ul li:nth-child(3)').removeClass('bold');
      $('.textbox_in>div:nth-child(3)').removeClass('on');
    }

    if ((height >= windowHeight * 6) && (height < windowHeight * 8)) {
      $('.listbox ul li:nth-child(4)').addClass('bold');
      $('.textbox_in>div:nth-child(4)').addClass('on');
    } else {
      $('.listbox ul li:nth-child(4)').removeClass('bold');
      $('.textbox_in>div:nth-child(4)').removeClass('on');
    }

    if ((height >= windowHeight * 8) && (height < windowHeight * 9)) {
      $('.listbox ul li:nth-child(5)').addClass('bold');
      $('.textbox_in>div:nth-child(5)').addClass('on');
    } else {
      $('.listbox ul li:nth-child(5)').removeClass('bold');
      $('.textbox_in>div:nth-child(5)').removeClass('on');
    }

    if ((height >= windowHeight * 9) && (height < windowHeight * 10)) {
      $('.listbox ul li:nth-child(6)').addClass('bold');
      $('.textbox_in>div:nth-child(6)').addClass('on');
    } else {
      $('.listbox ul li:nth-child(6)').removeClass('bold');
      $('.textbox_in>div:nth-child(6)').removeClass('on');
    }

    if ((height >= windowHeight * 10) && (height < windowHeight * 11)) {
      $('.listbox ul li:nth-child(7)').addClass('bold');
      $('.textbox_in>div:nth-child(7)').addClass('on');
    } else {
      $('.listbox ul li:nth-child(7)').removeClass('bold');
      $('.textbox_in>div:nth-child(7)').removeClass('on');
    }

  });

  $(function () {
          $('.tabcontent > div').hide();
          $('.tabnav a').click(function () {
              $('.tabcontent > div').hide().filter(this.hash).fadeIn();
              $('.tabnav a').removeClass('active');
              $(this).addClass('active');
              return false;
          }).filter(':eq(0)').click();
      });

  console.log($(window).scrollTop());