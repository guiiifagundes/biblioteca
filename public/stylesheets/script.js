function showContent(tabId) {
    // Esconder todos os conteúdos das abas
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
      tab.style.display = 'none';
    });
  
    // Exibir o conteúdo da aba selecionada
    var selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
  }
  