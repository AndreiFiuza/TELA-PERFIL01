window.addEventListener('DOMContentLoaded', () => {
    const nome = localStorage.getItem('nomePerfil') || 'Usuário';
    const bio = localStorage.getItem('bioPerfil') || 'Sua bio aqui...';
    const foto = localStorage.getItem('fotoPerfil') || 'default.png';
  
    document.getElementById('nomeUsuario').textContent = nome;
    document.getElementById('bioUsuario').textContent = bio;
    document.getElementById('fotoPerfil').src = foto;
  });
  
  function abrirModalEditar() {
    document.getElementById('inputNome').value = localStorage.getItem('nomePerfil') || '';
    document.getElementById('inputBio').value = localStorage.getItem('bioPerfil') || '';
    document.getElementById('modalEditar').style.display = 'flex';
  }
  
  function abrirModalFoto() {
    document.getElementById('modalFoto').style.display = 'flex';
  }
  
  function fecharModal(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  function salvarPerfil() {
    const nome = document.getElementById('inputNome').value;
    const bio = document.getElementById('inputBio').value;
  
    localStorage.setItem('nomePerfil', nome);
    localStorage.setItem('bioPerfil', bio);
  
    document.getElementById('nomeUsuario').textContent = nome;
    document.getElementById('bioUsuario').textContent = bio;
    fecharModal('modalEditar');
  }
  
  function trocarFoto() {
    const input = document.getElementById('inputFoto');
    const file = input.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem('fotoPerfil', reader.result);
      document.getElementById('fotoPerfil').src = reader.result;
  
      // Atualiza também na home se ela estiver aberta
      window.localStorage.setItem('fotoPerfil', reader.result);
    };
    reader.readAsDataURL(file);
    fecharModal('modalFoto');
  }
  