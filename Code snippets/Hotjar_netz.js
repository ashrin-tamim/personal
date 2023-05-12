setTimeout( function() {
    if (!document.querySelector('.test017')) {
        try {
              document.querySelector('body').classList.add('test017');
              var script = document.createElement("script");
               script.type = "text/javascript";
               script.innerHTML=`(function(h,o,t,j,a,r){
                     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                     h._hjSettings={hjid:2555839,hjsv:6};
                     a=o.getElementsByTagName('head')[0];
                     r=o.createElement('script');r.async=1;
                     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                     a.appendChild(r);
                 })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
               `;
               document.head.appendChild(script);
     
             hj('event', 'split_test_a');
        } catch (error) {
        }
      }
      else{
      }
}, 2000)
