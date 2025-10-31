(function() {
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    const tokenStr = iframe.contentWindow.localStorage.getItem('token');
    iframe.remove();
    console.log('%cToken: %s', 'font-size: 16px; color: green;', tokenStr);
})();
