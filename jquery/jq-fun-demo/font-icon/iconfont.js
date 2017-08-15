;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-time" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 0C229.23264 0 0 229.23264 0 512s229.23264 512 512 512 512-229.23264 512-512S794.76736 0 512 0zM512 983.04C252.27264 983.04 40.96 771.72736 40.96 512S252.27264 40.96 512 40.96s471.04 211.31264 471.04 471.04S771.72736 983.04 512 983.04z"  ></path>'+
      ''+
      '<path d="M532.48 102.4 491.52 102.4 491.52 522.9568 746.3936 692.87936 769.1264 658.80064 532.48 501.0432Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tubiao06" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M351.913 291.528l386.007 386.007-51.436 51.436-386.007-386.007 51.436-51.436z"  ></path>'+
      ''+
      '<path d="M686.516 291.528l51.436 51.436-386.007 386.007-51.436-51.436 386.007-386.007z"  ></path>'+
      ''+
      '<path d="M512 1001.689c-270.921 0-491.302-220.382-491.302-491.387s220.382-491.302 491.302-491.302 491.302 220.382 491.302 491.387-220.382 491.302-491.302 491.302zM512 91.741c-230.821 0-418.56 187.739-418.56 418.56s187.739 418.56 418.56 418.56 418.56-187.739 418.56-418.56-187.739-418.56-418.56-418.56z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
