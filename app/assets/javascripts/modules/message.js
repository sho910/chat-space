$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="Chat-main__message__detail">
          <div class="Chat-main__message__detail__user-name">
            ${message.user_name}
          </div>
          <div class="Chat-main__message__detail__update-time">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__message__comment">
          <p class="Chat-main__message__comment__content">
            ${message.content}
          </p>
          <img class="Message__image" src="${message.image}">
        </div>
      </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="Chat-main__message__detail">
          <div class="Chat-main__message__detail__user-name">
            ${message.user_name}
          </div>
          <div class="Chat-main__message__detail__update-time">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__message__comment">
          <p class="Chat-main__message__comment__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message').append(html);      
      $('form')[0].reset();
      $('.Chat-main__message').animate({ scrollTop: $('.Chat-main__message')[0].scrollHeight});
      $('.Form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disabled", false);
    });
  }); 
});