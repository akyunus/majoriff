<comment-box>
  <div class="section">
  
    <p each={ tab, i in tabs } class="tabItem { is-active: parent.isActiveTab(tab.ref) }" onclick={ parent.toggleTab }>{tab.title}</p>
	
  <div class="tabContent">
    <div each={ tab, i in tabs } class="tabContent__item { is-active: parent.isActiveTab(tab.ref) }">{tab.content}</div>
  </div>
</div>
  
  this.tabs = opts.tabs
	
	var self = this
	this.tabs = [];
	
	this.on('mount', function(){
    
		$.get( opts.url, function(data) {
			this.tabs = data
			update()
		})
	})

  
  this.activeTab = 'tab1'

  isActiveTab(tab) {
    return this.activeTab === tab
  }

  toggleTab(e) {
    this.activeTab = e.item.tab.ref
    return true
  }
</comment-box>