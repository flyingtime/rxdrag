
let themes = {
  base:{
    cssFiles:[
      'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
      'style/rxeditor.css',
      'style/font-awesome-4.7.0/css/font-awesome.min.css',
    ],
    jsFiles:[
    ],
  },
  agency : {
    id:'agency',
    cssFiles:[
      'themes/agency/vendor/bootstrap/css/bootstrap.min.css',
      'themes/agency/vendor/fontawesome-free/css/all.min.css',
      'style/font-awesome-4.7.0/css/font-awesome.min.css',
      'https://fonts.googleapis.com/css?family=Montserrat:400,700',
      'https://fonts.googleapis.com/css?family=Kaushan+Script',
      'https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic',
      'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700',
      'themes/agency/css/agency.min.css',
    ],
    jsFiles:[
      'themes/agency/vendor/jquery/jquery.min.js',
      'themes/agency/vendor/bootstrap/js/bootstrap.bundle.min.js',
      'themes/agency/vendor/jquery-easing/jquery.easing.min.js',
      'themes/agency/js/jqBootstrapValidation.js',
      'themes/agency/js/contact_me.js',
      'themes/agency/js/agency.min.js',
    ],

    uiBlocks:[
      {
        toolboxInfo:{
          //groupId : 'groupThemUI',
          elementId : 'navbar',
          elementName : "Navbar",
        },
        
        json:`
        {"name":"BSNavbar","meta":{"tag":"nav","classList":["navbar"],"styles":{},"attributes":{},"navbarContextual":"navbar-dark","navbarExpand":{"xs":"","sm":"","md":"","lg":"","xl":""},"utilPosition":"fixed-top","htmlId":""},"children":[{"name":"BSNavbarBrand","meta":{"tag":"a","classList":["navbar-brand","js-scroll-trigger"],"styles":{},"attributes":{},"innerHTML":"Brand","generalTextfield":"contentEditable","aHref":"#","aTarget":"","generalTitle":"","alertLink":""},"children":[]},{"name":"BSNavbarToggler","meta":{"tag":"button","classList":["navbar-toggler"],"styles":{},"attributes":{}},"children":[{"name":"HTMLSpan","meta":{"tag":"span","classList":[],"styles":{},"attributes":{},"innerHTML":"Menu&nbsp;","generalTextfield":"contentEditable","utilColor":{"textColor":"","backgroundColor":""},"utilBorder":{"addBorder":[],"removeBorder":[],"borderColor":"","borderRadius":""},"utilMargin":{"all":{"xs":"","sm":"","md":"","lg":"","xl":""},"horizontal":{"xs":"","sm":"","md":"","lg":"","xl":""},"vertical":{"xs":"","sm":"","md":"","lg":"","xl":""},"top":{"xs":"","sm":"","md":"","lg":"","xl":""},"right":{"xs":"","sm":"","md":"","lg":"","xl":""},"bottom":{"xs":"","sm":"","md":"","lg":"","xl":""},"left":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilPadding":{"all":{"xs":"","sm":"","md":"","lg":"","xl":""},"horizontal":{"xs":"","sm":"","md":"","lg":"","xl":""},"vertical":{"xs":"","sm":"","md":"","lg":"","xl":""},"top":{"xs":"","sm":"","md":"","lg":"","xl":""},"right":{"xs":"","sm":"","md":"","lg":"","xl":""},"bottom":{"xs":"","sm":"","md":"","lg":"","xl":""},"left":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilText":{"align":{"xs":"","sm":"","md":"","lg":"","xl":""},"justify":"","wrapping":"","truncate":"","wordBreak":"","transform":"","weight":"","italics":"","monospace":"","resetColor":"","decoration":""}},"children":[]},{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fa-bars"],"styles":{},"attributes":{}},"children":[]}]}]}
        `,
      },
      {
        toolboxInfo:{
          //groupId : 'groupThemUI',
          elementId : 'header',
          elementName : "Header",
        },
        
        json:`
        {"name":"HTMLHeader","meta":{"tag":"header","classList":["masthead"],"styles":{},"attributes":{}},"children":[{"name":"BSContainer","meta":{"tag":"div","classList":["intro-text"],"styles":{},"attributes":{},"containerFluid":"container","utilColor":{"textColor":"","backgroundColor":""},"utilBorder":{"addBorder":[],"removeBorder":[],"borderColor":"","borderRadius":""}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["intro-text"],"styles":{},"attributes":{},"htmlId":"","headingPseudo":"","headingDisplay":"","typyRow":"","colWidth":{"xs":"","sm":"","md":"","lg":"","xl":""},"colOffset":{"xs":"","sm":"","md":"","lg":"","xl":""},"colAlignSelf":{"xs":"","sm":"","md":"","lg":"","xl":""},"colOrder":{"xs":"","sm":"","md":"","lg":"","xl":""},"utilMarginAuto":{"xs":"","sm":"","md":"","lg":"","xl":""},"typyLead":"","typyInitialism":"","typyBlockquote":"","typyBlockquoteFooter":"","utilColor":{"textColor":"","backgroundColor":""},"utilBorder":{"borderColor":"","addBorder":[],"removeBorder":[],"borderRadius":""},"utilMargin":{"all":{"xs":"","sm":"","md":"","lg":"","xl":""},"horizontal":{"xs":"","sm":"","md":"","lg":"","xl":""},"vertical":{"xs":"","sm":"","md":"","lg":"","xl":""},"top":{"xs":"","sm":"","md":"","lg":"","xl":""},"right":{"xs":"","sm":"","md":"","lg":"","xl":""},"bottom":{"xs":"","sm":"","md":"","lg":"","xl":""},"left":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilPadding":{"all":{"xs":"","sm":"","md":"","lg":"","xl":""},"horizontal":{"xs":"","sm":"","md":"","lg":"","xl":""},"vertical":{"xs":"","sm":"","md":"","lg":"","xl":""},"top":{"xs":"","sm":"","md":"","lg":"","xl":""},"right":{"xs":"","sm":"","md":"","lg":"","xl":""},"bottom":{"xs":"","sm":"","md":"","lg":"","xl":""},"left":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilClearfix":"","utilDisplay":{"xs":"","sm":"","md":"","lg":"","xl":""},"utilEmbed":{"responsive":"","aspectRadion":""},"utilResponsiveItem":"","utilFlex":{"display":{"xs":"","sm":"","md":"","lg":"","xl":""},"direction":{"xs":"","sm":"","md":"","lg":"","xl":""},"justifyContent":{"xs":"","sm":"","md":"","lg":"","xl":""},"alignItems":{"xs":"","sm":"","md":"","lg":"","xl":""},"alignSelf":{"xs":"","sm":"","md":"","lg":"","xl":""},"fill":{"xs":"","sm":"","md":"","lg":"","xl":""},"grow":{"xs":"","sm":"","md":"","lg":"","xl":""},"shrink":{"xs":"","sm":"","md":"","lg":"","xl":""},"marginAuto":{"xs":"","sm":"","md":"","lg":"","xl":""},"wrap":{"xs":"","sm":"","md":"","lg":"","xl":""},"order":{"xs":"","sm":"","md":"","lg":"","xl":""},"alignContent":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilFloat":{"xs":"","sm":"","md":"","lg":"","xl":""},"utilTextHide":"","utilOverflow":"","utilPosition":"","utilScreenReaders":"","utilShadow":"","utilSizing":{"width":"","height":""},"utilStretchedLink":"","utilText":{"align":{"xs":"","sm":"","md":"","lg":"","xl":""},"justify":"","wrapping":"","truncate":"","wordBreak":"","transform":"","weight":"","italics":"","monospace":"","resetColor":"","decoration":""},"utilVerticalAlignment":"","utilVisibility":""},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["intro-lead-in"],"styles":{},"attributes":{},"htmlId":"","headingPseudo":"","headingDisplay":"","typyRow":"","colWidth":{"xs":"","sm":"","md":"","lg":"","xl":""},"colOffset":{"xs":"","sm":"","md":"","lg":"","xl":""},"colAlignSelf":{"xs":"","sm":"","md":"","lg":"","xl":""},"colOrder":{"xs":"","sm":"","md":"","lg":"","xl":""},"utilMarginAuto":{"xs":"","sm":"","md":"","lg":"","xl":""},"typyLead":"","typyInitialism":"","typyBlockquote":"","typyBlockquoteFooter":"","utilColor":{"textColor":"","backgroundColor":""},"utilBorder":{"borderColor":"","addBorder":[],"removeBorder":[],"borderRadius":""},"utilMargin":{"all":{"xs":"","sm":"","md":"","lg":"","xl":""},"horizontal":{"xs":"","sm":"","md":"","lg":"","xl":""},"vertical":{"xs":"","sm":"","md":"","lg":"","xl":""},"top":{"xs":"","sm":"","md":"","lg":"","xl":""},"right":{"xs":"","sm":"","md":"","lg":"","xl":""},"bottom":{"xs":"","sm":"","md":"","lg":"","xl":""},"left":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilPadding":{"all":{"xs":"","sm":"","md":"","lg":"","xl":""},"horizontal":{"xs":"","sm":"","md":"","lg":"","xl":""},"vertical":{"xs":"","sm":"","md":"","lg":"","xl":""},"top":{"xs":"","sm":"","md":"","lg":"","xl":""},"right":{"xs":"","sm":"","md":"","lg":"","xl":""},"bottom":{"xs":"","sm":"","md":"","lg":"","xl":""},"left":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilClearfix":"","utilDisplay":{"xs":"","sm":"","md":"","lg":"","xl":""},"utilEmbed":{"responsive":"","aspectRadion":""},"utilResponsiveItem":"","utilFlex":{"display":{"xs":"","sm":"","md":"","lg":"","xl":""},"direction":{"xs":"","sm":"","md":"","lg":"","xl":""},"justifyContent":{"xs":"","sm":"","md":"","lg":"","xl":""},"alignItems":{"xs":"","sm":"","md":"","lg":"","xl":""},"alignSelf":{"xs":"","sm":"","md":"","lg":"","xl":""},"fill":{"xs":"","sm":"","md":"","lg":"","xl":""},"grow":{"xs":"","sm":"","md":"","lg":"","xl":""},"shrink":{"xs":"","sm":"","md":"","lg":"","xl":""},"marginAuto":{"xs":"","sm":"","md":"","lg":"","xl":""},"wrap":{"xs":"","sm":"","md":"","lg":"","xl":""},"order":{"xs":"","sm":"","md":"","lg":"","xl":""},"alignContent":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilFloat":{"xs":"","sm":"","md":"","lg":"","xl":""},"utilTextHide":"","utilOverflow":"","utilPosition":"","utilScreenReaders":"","utilShadow":"","utilSizing":{"width":"","height":""},"utilStretchedLink":"","utilText":{"align":{"xs":"","sm":"","md":"","lg":"","xl":""},"justify":"","wrapping":"","truncate":"","wordBreak":"","transform":"","weight":"","italics":"","monospace":"","resetColor":"","decoration":""},"utilVerticalAlignment":"","utilVisibility":""},"children":[{"name":"HTMLSpan","meta":{"tag":"span","classList":[],"styles":{},"attributes":{},"innerHTML":"Welcome To Our Studio!","generalTextfield":"contentEditable","utilColor":{"textColor":"","backgroundColor":""},"utilBorder":{"addBorder":[],"removeBorder":[],"borderColor":"","borderRadius":""},"utilMargin":{"all":{"xs":"","sm":"","md":"","lg":"","xl":""},"horizontal":{"xs":"","sm":"","md":"","lg":"","xl":""},"vertical":{"xs":"","sm":"","md":"","lg":"","xl":""},"top":{"xs":"","sm":"","md":"","lg":"","xl":""},"right":{"xs":"","sm":"","md":"","lg":"","xl":""},"bottom":{"xs":"","sm":"","md":"","lg":"","xl":""},"left":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilPadding":{"all":{"xs":"","sm":"","md":"","lg":"","xl":""},"horizontal":{"xs":"","sm":"","md":"","lg":"","xl":""},"vertical":{"xs":"","sm":"","md":"","lg":"","xl":""},"top":{"xs":"","sm":"","md":"","lg":"","xl":""},"right":{"xs":"","sm":"","md":"","lg":"","xl":""},"bottom":{"xs":"","sm":"","md":"","lg":"","xl":""},"left":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilText":{"align":{"xs":"","sm":"","md":"","lg":"","xl":""},"justify":"","wrapping":"","truncate":"","wordBreak":"","transform":"","weight":"","italics":"","monospace":"","resetColor":"","decoration":""}},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["intro-heading","text-uppercase"],"styles":{},"attributes":{},"htmlId":"","headingPseudo":"","headingDisplay":"","typyRow":"","colWidth":{"xs":"","sm":"","md":"","lg":"","xl":""},"colOffset":{"xs":"","sm":"","md":"","lg":"","xl":""},"colAlignSelf":{"xs":"","sm":"","md":"","lg":"","xl":""},"colOrder":{"xs":"","sm":"","md":"","lg":"","xl":""},"utilMarginAuto":{"xs":"","sm":"","md":"","lg":"","xl":""},"typyLead":"","typyInitialism":"","typyBlockquote":"","typyBlockquoteFooter":"","utilColor":{"textColor":"","backgroundColor":""},"utilBorder":{"borderColor":"","addBorder":[],"removeBorder":[],"borderRadius":""},"utilMargin":{"all":{"xs":"","sm":"","md":"","lg":"","xl":""},"horizontal":{"xs":"","sm":"","md":"","lg":"","xl":""},"vertical":{"xs":"","sm":"","md":"","lg":"","xl":""},"top":{"xs":"","sm":"","md":"","lg":"","xl":""},"right":{"xs":"","sm":"","md":"","lg":"","xl":""},"bottom":{"xs":"","sm":"","md":"","lg":"","xl":""},"left":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilPadding":{"all":{"xs":"","sm":"","md":"","lg":"","xl":""},"horizontal":{"xs":"","sm":"","md":"","lg":"","xl":""},"vertical":{"xs":"","sm":"","md":"","lg":"","xl":""},"top":{"xs":"","sm":"","md":"","lg":"","xl":""},"right":{"xs":"","sm":"","md":"","lg":"","xl":""},"bottom":{"xs":"","sm":"","md":"","lg":"","xl":""},"left":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilClearfix":"","utilDisplay":{"xs":"","sm":"","md":"","lg":"","xl":""},"utilEmbed":{"responsive":"","aspectRadion":""},"utilResponsiveItem":"","utilFlex":{"display":{"xs":"","sm":"","md":"","lg":"","xl":""},"direction":{"xs":"","sm":"","md":"","lg":"","xl":""},"justifyContent":{"xs":"","sm":"","md":"","lg":"","xl":""},"alignItems":{"xs":"","sm":"","md":"","lg":"","xl":""},"alignSelf":{"xs":"","sm":"","md":"","lg":"","xl":""},"fill":{"xs":"","sm":"","md":"","lg":"","xl":""},"grow":{"xs":"","sm":"","md":"","lg":"","xl":""},"shrink":{"xs":"","sm":"","md":"","lg":"","xl":""},"marginAuto":{"xs":"","sm":"","md":"","lg":"","xl":""},"wrap":{"xs":"","sm":"","md":"","lg":"","xl":""},"order":{"xs":"","sm":"","md":"","lg":"","xl":""},"alignContent":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilFloat":{"xs":"","sm":"","md":"","lg":"","xl":""},"utilTextHide":"","utilOverflow":"","utilPosition":"","utilScreenReaders":"","utilShadow":"","utilSizing":{"width":"","height":""},"utilStretchedLink":"","utilText":{"align":{"xs":"","sm":"","md":"","lg":"","xl":""},"justify":"","wrapping":"","truncate":"","wordBreak":"","transform":"","weight":"","italics":"","monospace":"","resetColor":"","decoration":""},"utilVerticalAlignment":"","utilVisibility":""},"children":[{"name":"HTMLSpan","meta":{"tag":"span","classList":[],"styles":{},"attributes":{},"innerHTML":"It's Nice To Meet You","generalTextfield":"contentEditable","utilColor":{"textColor":"","backgroundColor":""},"utilBorder":{"addBorder":[],"removeBorder":[],"borderColor":"","borderRadius":""},"utilMargin":{"all":{"xs":"","sm":"","md":"","lg":"","xl":""},"horizontal":{"xs":"","sm":"","md":"","lg":"","xl":""},"vertical":{"xs":"","sm":"","md":"","lg":"","xl":""},"top":{"xs":"","sm":"","md":"","lg":"","xl":""},"right":{"xs":"","sm":"","md":"","lg":"","xl":""},"bottom":{"xs":"","sm":"","md":"","lg":"","xl":""},"left":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilPadding":{"all":{"xs":"","sm":"","md":"","lg":"","xl":""},"horizontal":{"xs":"","sm":"","md":"","lg":"","xl":""},"vertical":{"xs":"","sm":"","md":"","lg":"","xl":""},"top":{"xs":"","sm":"","md":"","lg":"","xl":""},"right":{"xs":"","sm":"","md":"","lg":"","xl":""},"bottom":{"xs":"","sm":"","md":"","lg":"","xl":""},"left":{"xs":"","sm":"","md":"","lg":"","xl":""}},"utilText":{"align":{"xs":"","sm":"","md":"","lg":"","xl":""},"justify":"","wrapping":"","truncate":"","wordBreak":"","transform":"","weight":"","italics":"","monospace":"","resetColor":"","decoration":""}},"children":[]}]},{"name":"BSButton","meta":{"tag":"button","classList":["btn","btn-xl","text-uppercase","js-scroll-trigger"],"styles":{},"attributes":{},"innerHTML":"Tell Me More","generalTextfield":"contentEditable","buttonContextual":"btn-primary","buttonSize":"","buttonActive":"","buttonDisabled":"","buttonType":""},"children":[]}]}]}]}
        `,
      },

    ],

    initialPage:``,

  }
}

export {themes}