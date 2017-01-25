$(document).ready(function() {
    var twitter_load = function() {
       var twitter_code  = '<script>window.twttr = (function(d, s, id) {'
        twitter_code += 'var js, fjs = d.getElementsByTagName(s)[0],'
        twitter_code += 't = window.twttr || {};'
        twitter_code += 'if (d.getElementById(id)) return t;'
        twitter_code += 'js = d.createElement(s);'
        twitter_code += 'js.id = id;'
        twitter_code += 'js.src = "https://platform.twitter.com/widgets.js";'
        twitter_code += 'fjs.parentNode.insertBefore(js, fjs);'
        twitter_code += 't._e = [];'
        twitter_code += 't.ready = function(f) {'
        twitter_code += 't._e.push(f);'
        twitter_code += '};'
        twitter_code += 'return t;'
        twitter_code += '}(document, "script", "twitter-wjs"));</script></script>';
    
    $(".tweet").each(function() {
      $(this).after(twitter_code);
      $(this).removeClass('tweet');
      //console.log('here');
      //console.log(twttr);
      var tweet_id = $(this).attr('data-tweet-id');
      var tweet_div = $(this)[0];
      //console.log(tweet_div);
      twttr.ready(function(evt) {
        twttr.widgets.createTweet(tweet_id, tweet_div, 
          {
            conversation : 'none',    // or all
            theme        : 'light'    // or dark
          })
        });
      });
    }
    
    $(".tweet:in-viewport").each(function() {
      twitter_load();
    });
    
    $(".lazy:in-viewport").each(function() {
        $(this).hide().attr("src", $(this).attr("data-src")).fadeIn(500).removeClass("lazy");
    });
    $(window).bind("scroll", function(event) {
        $(".lazy:in-viewport").each(function() {
            $(this).hide().attr("src", $(this).attr("data-src")).fadeIn(500).removeClass("lazy");
        });
        $(".tweet:in-viewport").each(function() {
          twitter_load();
        });
    });
    
   
    
    // Load javascript for social media subscribe buttons asynchronously.
    var social_open = function() {
      var youtubesubscribescript = '<script src="https://apis.google.com/js/platform.js"></script>'
      
      var twitterscript =                 '<script>window.twttr = (function(d, s, id) {';
          twitterscript = twitterscript + 'var js, fjs = d.getElementsByTagName(s)[0],';
          twitterscript = twitterscript + 't = window.twttr || {};';
          twitterscript = twitterscript + 'if (d.getElementById(id)) return t;';
          twitterscript = twitterscript + 'js = d.createElement(s);';
          twitterscript = twitterscript + 'js.id = id;';
          twitterscript = twitterscript + 'js.src = "https://platform.twitter.com/widgets.js";';
          twitterscript = twitterscript + 'fjs.parentNode.insertBefore(js, fjs);';
          twitterscript = twitterscript + 't._e = [];';
          twitterscript = twitterscript + 't.ready = function(f) {';
          twitterscript = twitterscript + 't._e.push(f);'
          twitterscript = twitterscript + '};';
          twitterscript = twitterscript + 'return t;';
          twitterscript = twitterscript + '}(document, "script", "twitter-wjs"));</script>';
      
      $(youtubesubscribescript).insertBefore( "#side-subscribe" );
      $(twitterscript).insertBefore( "#side-subscribe" );
      
      var facebookscript = '';
          facebookscript = facebookscript + '<div id="fb-root"></div>';
          facebookscript = facebookscript + '<script>(function(d, s, id) {';
          facebookscript = facebookscript + 'var js, fjs = d.getElementsByTagName(s)[0];';
          facebookscript = facebookscript + 'if (d.getElementById(id)) return;';
          facebookscript = facebookscript + 'js = d.createElement(s); js.id = id;';
          facebookscript = facebookscript + 'js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=485362104833338";';
          facebookscript = facebookscript + 'fjs.parentNode.insertBefore(js, fjs);';
          facebookscript = facebookscript + "}(document, 'script', 'facebook-jssdk'));</script>";
       $('body').prepend(facebookscript);
      //alert('here');  
    }
    
    $('#menu_button').sidr({
        name: 'sidr_menu',
        side: 'left'
      });
    $('#social_button').sidr({
        name: 'sidr_social',
        onOpen: social_open,
        side: 'right'
      });
    $('.sidr_close').click(function(){
      //alert("CHECK!");
      $.sidr('close', 'sidr_menu');
      $.sidr('close', 'sidr_social');
      });
});