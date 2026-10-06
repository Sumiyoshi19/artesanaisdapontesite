/* ============================================
   NÚMERO REAL DA ARTESANAIS DA PONTE
   ============================================ */
const WHATSAPP_NUMERO = "554898415266";

/* ============================================
   ÍCONE DE FOTO (placeholder do espaço quadrado)
   ============================================ */
const ICONE_FOTO = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <circle cx="8.5" cy="8.5" r="1.8"/>
    <path d="M21 15l-5-5L5 21"/>
  </svg>`;

/* ============================================
   CATÁLOGO — foto: "" = mostra o espaço em branco;
   para usar a imagem, coloque o arquivo na pasta img/
   e escreva ex: foto: "img/cuca.jpg"
   ============================================ */
const produtos = [
  { id: 1,  nome: "Cuca", desc: "Massa fofinha com farofa crocante e douradinha", preco: 25.00, foto: "img/cuca.png", categoria: "Bolos",
    sabores: ["Abacaxi", "Banana", "Chocolate", "Creme com Coco", "Doce de Leite", "Goiabada", "Farofa"] },
  { id: 2,  nome: "Bolo Amanteigado com Farofa", desc: "Macio por dentro, crocante por cima", preco: 20.00, foto: "img/bolo_amanteigado_com_farofa.png", categoria: "Bolos", sabores: [] },
  { id: 3,  nome: "Bolo de Banana com Farofa", desc: "Bananas maduras selecionadas e farofa crocante", preco: 20.00, foto: "img/bolo_de_banana_com_farofa.png", categoria: "Bolos", sabores: [] },
  { id: 4,  nome: "Bolo de Goiabada com Farofa", desc: "Pedacinhos de goiabada que derretem na boca", preco: 20.00, foto: "img/bolo_de_goiabada_com_farofa.png", categoria: "Bolos", sabores: [] },
  { id: 5,  nome: "Bolo de Creme com Coco", desc: "Creme suave, coco delicioso e farofa douradinha", preco: 20.00, foto: "img/bolo_de_creme_com_coco.png", categoria: "Bolos", sabores: [] },
  { id: 6,  nome: "Bolo Amanteigado", desc: "Sabor marcante de manteiga, derrete na boca", preco: 20.00, foto: "img/bolo_amanteigado.png", categoria: "Bolos", sabores: [] },
  { id: 7,  nome: "Bolo Integral de Banana com Granola", desc: "Rico em fibras, feito com bananas maduras", preco: 25.00, foto: "img/bolo_integral_de_banana_com_granola.png", categoria: "Bolos", sabores: [] },
  { id: 8,  nome: "Bolo de Limão", desc: "Cobertura cremosa com toque cítrico refrescante", preco: 25.00, foto: "img/bolo_de_limão.png", categoria: "Bolos", sabores: [] },

  { id: 9, nome: "Bolachas Caseiras", desc: "Crocantes, assadas no forno a lenha", preco: 25.00, foto: "img/bolachas_caseiras.png", categoria: "Bolachas",
    sabores: ["Amanteigado", "Amanteigado com Confete", "Amanteigado de Canela", "Amanteigado de Laranja", "Mista", "Broa de Amendoim", "Broa de Aipim e Coco", "Broa de Polvilho", "Canela", "Cookie Cappuccino", "Cookie Confete", "Cookie Gotas de Chocolate", "Cookie Integral de Amendoim", "Cookie Integral de Aveia", "Enroladinho de Chocolate", "Farofinha", "Fubá", "Goiabada", "Leite Condensado", "Maisena e Coco", "Nata e Coco", "Palitinhos de Leite Ninho", "Palitinhos de Maracujá"] },
  { id: 10, nome: "Pão Integral", desc: "Rico em fibras, macio e nutritivo", preco: 20.00, foto: "img/pao_integral.png", categoria: "Pães", sabores: [] },
  { id: 11, nome: "Pão de Milho", desc: "Como antigamente, assado no forno a lenha", preco: 13.00, foto: "img/pao_milho.png", categoria: "Pães", sabores: [] },
  { id: 12, nome: "Pão de Aipim", desc: "Macio e fofinho, fermentação natural", preco: 13.00, foto: "img/pao_aipim.png", categoria: "Pães", sabores: [] },
  { id: 13, nome: "Pão de Batata Doce", desc: "Sabor, saúde e tradição em cada fatia", preco: 13.00, foto: "img/pao_batata_doce.png", categoria: "Pães", sabores: [] },
  { id: 14, nome: "Pizza Congelada", desc: "Massa leve, fermentação natural, forno a lenha", preco: 30.00, foto: "img/pizzas_congeladas.png", categoria: "Salgados",
    sabores: ["Portuguesa", "Calabresa", "Calabresa com Cebola", "Frango", "Frango com Palmito", "Frango com Requeijão", "Frango com Cheddar", "Frango com Calabresa", "Bacon", "Bacon com Milho", "Bacon com Palmito", "Quatro Queijos"] },
  { id: 15, nome: "Lasanha Artesanal", desc: "Congelada, serve 3 a 4 porções", preco: 30.00, foto: "img/lasanha.png", categoria: "Salgados",
    sabores: ["Frango", "Frango com Palmito"] },
  { id: 16, nome: "Empadão Artesanal", desc: "Massa que desmancha na boca, serve 3 a 4 porções", preco: 30.00, foto: "img/empadão.png", categoria: "Salgados",
    sabores: ["Frango", "Bolonhesa"] },
];

/* ============================================
   FEEDBACKS REAIS DE CLIENTES
   ============================================ */
const avaliacoes = [
  { nome: "Theo S.", estrelas: 5, texto: "Experimentamos eu e meu marido ontem à noite. Muito bons!!! Eu já estava quase desistindo de comer pão pelas restrições. Obrigada 🙏" },
  { nome: "Cliente do Empadão", estrelas: 5, texto: "Oi, boa tarde. Desculpa a demora. O empadão estava uma delícia, muito saboroso! 😊" },
  { nome: "Cliente da Pizza", estrelas: 5, texto: "Glória a Deus que o senhor continue abençoando vocês grandemente. Maravilhosa, meu Deus!" },
  { nome: "Cliente Sem Glúten", estrelas: 5, texto: "Quero agradecer pois teus produtos são maravilhosos. Não posso mais comer glúten e no começo foi assustador, pois sempre gostei de massa. Até uma cliente da loja me falar de vocês — graças a Deus, nem parece que estou comendo produtos sem glúten, de tão bons que são." },
  { nome: "Cliente Fiel", estrelas: 5, texto: "Passando para lhes dizer que as pizzas são excelentes, empadão e os pães não têm do que reclamar." },
];

/* ============================================
   ESTADO
   ============================================ */
let carrinho = {};
let produtoModal = null;
let saborSelecionado = null;
let slideAtual = 0;
let autoplayTimer = null;
let categoriaAtiva = "Todos";

/* Monta o bloco de foto (imagem ou espaço vazio) */
function blocoFoto(p) {
  if (p.foto) {
    return `<img src="${p.foto}" alt="${p.nome}">`;
  }
  return `${ICONE_FOTO}<span>Foto do produto</span>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const gridEl     = document.getElementById("grid-produtos");
  const filtrosEl  = document.getElementById("filtros");
  const listaEl    = document.getElementById("lista-carrinho");
  const totalEl    = document.getElementById("total");
  const badgeEl    = document.getElementById("badge-carrinho");
  const sidebarEl  = document.getElementById("sidebar");
  const overlayEl  = document.getElementById("overlay");
  const toastEl    = document.getElementById("toast");
  const modalEl    = document.getElementById("modal");
  const slidesEl   = document.getElementById("slides");
  const bolinhasEl = document.getElementById("bolinhas");
  const headerEl   = document.getElementById("header");

  const fmt = v => "R$ " + v.toFixed(2).replace(".", ",");
  const precoTexto = p => p === null ? "Sob consulta" : fmt(p);

  function mostrarToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("mostrar");
    setTimeout(() => toastEl.classList.remove("mostrar"), 2500);
  }

  /* ---------- FILTROS DE CATEGORIA ---------- */
  function renderFiltros() {
    const categorias = ["Todos", ...new Set(produtos.map(p => p.categoria))];
    filtrosEl.innerHTML = categorias.map(c =>
      `<button class="filtro ${c === categoriaAtiva ? "ativo" : ""}" data-categoria="${c}">${c}</button>`).join("");
  }

  filtrosEl.addEventListener("click", e => {
    const f = e.target.closest(".filtro");
    if (!f) return;
    categoriaAtiva = f.dataset.categoria;
    renderFiltros();
    renderCatalogo();
  });

  /* ---------- CATÁLOGO ---------- */
  function renderCatalogo() {
    const lista = categoriaAtiva === "Todos" ? produtos : produtos.filter(p => p.categoria === categoriaAtiva);
    gridEl.innerHTML = lista.map((p, i) => {
      const temNoCarrinho = Object.values(carrinho).some(it => it.id === p.id);
      let acao;
      if (p.sabores.length > 0) {
        acao = `<div class="tem-sabor">✨ ${p.sabores.length} sabores disponíveis</div>
                <button class="btn btn-add" data-acao="abrirModal" data-id="${p.id}">Escolher sabor</button>`;
      } else if (temNoCarrinho) {
        const qtd = Object.values(carrinho).filter(it => it.id === p.id).reduce((s, it) => s + it.qtd, 0);
        acao = `<div class="controles">
                  <button data-acao="removerItem" data-id="${p.id}">−</button>
                  <span class="qtd">${qtd}</span>
                  <button data-acao="addSimples" data-id="${p.id}">+</button>
                </div>`;
      } else {
        acao = `<button class="btn btn-add" data-acao="addSimples" data-id="${p.id}">Adicionar</button>`;
      }
      return `
        <div class="card" style="animation-delay:${i * 0.05}s" ${p.sabores.length > 0 ? `data-acao="abrirModal" data-id="${p.id}" style="cursor:pointer;animation-delay:${i * 0.05}s"` : ""}>
          <div class="foto-produto">${blocoFoto(p)}</div>
          <h3>${p.nome}</h3>
          <p class="desc">${p.desc}</p>
          <div class="preco">${precoTexto(p.preco)}</div>
          ${acao}
        </div>`;
    }).join("");
  }

  /* ---------- MODAL DE SABORES ---------- */
  function abrirModal(id) {
    produtoModal = produtos.find(p => p.id === id);
    saborSelecionado = null;
    document.getElementById("modal-foto").innerHTML = blocoFoto(produtoModal);
    document.getElementById("modal-nome").textContent = produtoModal.nome;
    document.getElementById("modal-preco").textContent = precoTexto(produtoModal.preco);
    document.getElementById("chips-sabores").innerHTML = produtoModal.sabores
      .map(s => `<button class="chip" data-sabor="${s}">${s}</button>`).join("");
    document.getElementById("btn-modal-add").disabled = true;
    modalEl.classList.add("ativo");
  }
  function fecharModal() {
    modalEl.classList.remove("ativo");
    produtoModal = null;
    saborSelecionado = null;
  }
  document.getElementById("modal-fechar").addEventListener("click", fecharModal);
  modalEl.addEventListener("click", e => { if (e.target === modalEl) fecharModal(); });

  document.getElementById("chips-sabores").addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("selecionado"));
    chip.classList.add("selecionado");
    saborSelecionado = chip.dataset.sabor;
    document.getElementById("btn-modal-add").disabled = false;
  });

  document.getElementById("btn-modal-add").addEventListener("click", () => {
    if (!produtoModal || !saborSelecionado) return;
    adicionarAoCarrinho(produtoModal.id, saborSelecionado);
    fecharModal();
    mostrarToast(`${produtoModal.nome} — ${saborSelecionado} adicionado! 🛒`);
  });

  /* ---------- CARRINHO ---------- */
  function adicionarAoCarrinho(id, sabor = "") {
    const chave = `${id}|${sabor}`;
    if (!carrinho[chave]) carrinho[chave] = { id, sabor, qtd: 0 };
    carrinho[chave].qtd++;
    atualizar();
  }
  function removerDoCarrinho(id, sabor = "") {
    const chave = `${id}|${sabor}`;
    if (carrinho[chave]) {
      carrinho[chave].qtd--;
      if (carrinho[chave].qtd <= 0) delete carrinho[chave];
    }
    atualizar();
  }
  function removerTudo(id, sabor = "") {
    delete carrinho[`${id}|${sabor}`];
    atualizar();
  }
  const chaveDe = it => `${it.id}|${it.sabor}`;

  function renderCarrinho() {
    const itens = Object.values(carrinho).filter(it => it.qtd > 0);
    badgeEl.textContent = itens.reduce((s, it) => s + it.qtd, 0);

    if (itens.length === 0) {
      listaEl.innerHTML = `<div class="carrinho-vazio">🛒<br>Seu carrinho está vazio</div>`;
      totalEl.textContent = "";
      return;
    }

    let total = 0;
    listaEl.innerHTML = itens.map(it => {
      const p = produtos.find(x => x.id === it.id);
      const nomeExibicao = it.sabor ? `${p.nome} — ${it.sabor}` : p.nome;
      const subtotal = p.preco === null ? null : p.preco * it.qtd;
      if (subtotal !== null) total += subtotal;
      return `
        <div class="item-carrinho">
          <div class="info">
            <strong>${nomeExibicao}</strong>
            <span>${it.qtd}x · ${subtotal === null ? "Sob consulta" : fmt(subtotal)}</span>
          </div>
          <div class="acoes">
            <button data-acao="removerChave" data-chave="${chaveDe(it)}">−</button>
            <button data-acao="addChave" data-chave="${chaveDe(it)}">+</button>
            <button class="remover" data-acao="removerTudoChave" data-chave="${chaveDe(it)}">🗑</button>
          </div>
        </div>`;
    }).join("");

    totalEl.textContent = `Total: ${fmt(total)}`;
  }

  function atualizar() {
    renderCatalogo();
    renderCarrinho();
  }

  /* ---------- EVENT DELEGATION ---------- */
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-acao]");
    if (!el) return;
    const acao = el.dataset.acao;

    if (acao === "abrirModal") { e.stopPropagation(); abrirModal(Number(el.dataset.id)); return; }
    if (acao === "addSimples") { adicionarAoCarrinho(Number(el.dataset.id)); return; }
    if (acao === "removerItem") {
      const chave = Object.keys(carrinho).find(k => k.startsWith(el.dataset.id + "|") && carrinho[k].sabor === "");
      if (chave) removerDoCarrinho(Number(chave.split("|")[0]), chave.split("|")[1]);
      return;
    }
    if (acao === "addChave" || acao === "removerChave" || acao === "removerTudoChave") {
      const [id, sabor] = el.dataset.chave.split("|");
      const idNum = Number(id);
      if (acao === "addChave")         adicionarAoCarrinho(idNum, sabor);
      if (acao === "removerChave")     removerDoCarrinho(idNum, sabor);
      if (acao === "removerTudoChave") removerTudo(idNum, sabor);
    }
  });

  /* ---------- SIDEBAR ---------- */
  document.getElementById("btn-carrinho").addEventListener("click", () => {
    sidebarEl.classList.add("aberto");
    overlayEl.classList.add("ativo");
  });
  document.getElementById("btn-fechar").addEventListener("click", () => {
    sidebarEl.classList.remove("aberto");
    overlayEl.classList.remove("ativo");
  });
  overlayEl.addEventListener("click", () => {
    sidebarEl.classList.remove("aberto");
    overlayEl.classList.remove("ativo");
  });

  /* ---------- BOTÃO COMPRAR → WHATSAPP ---------- */
  document.getElementById("btn-comprar").addEventListener("click", () => {
    const itens = Object.values(carrinho).filter(it => it.qtd > 0);

    if (itens.length === 0) {
      mostrarToast("Seu carrinho está vazio! Adicione algumas delícias primeiro 🥐");
      return;
    }

    let mensagem = "Olá, gostaria de encomendar:";
    itens.forEach(it => {
      const p = produtos.find(x => x.id === it.id);
      const nomeExibicao = it.sabor ? `${p.nome} — ${it.sabor}` : p.nome;
      mensagem += `\n${it.qtd}x ${nomeExibicao}`;
    });

    const link = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank");
  });

  /* ---------- CARROSSEL ---------- */
  function renderCarrossel() {
    slidesEl.innerHTML = avaliacoes.map(a => `
      <div class="slide">
        <div class="bolha-avaliacao">
          <div class="avaliacao-topo">
            <div class="avatar">${a.nome.charAt(0)}</div>
            <div>
              <div class="nome">${a.nome}</div>
              <div class="estrelas">${"★".repeat(a.estrelas)}</div>
            </div>
          </div>
          <p class="texto-avaliacao">"${a.texto}"</p>
        </div>
      </div>`).join("");

    bolinhasEl.innerHTML = avaliacoes.map((_, i) =>
      `<button class="bolinha ${i === 0 ? "ativa" : ""}" data-slide="${i}"></button>`).join("");
  }

  function irParaSlide(i) {
    slideAtual = (i + avaliacoes.length) % avaliacoes.length;
    slidesEl.style.transform = `translateX(-${slideAtual * 100}%)`;
    document.querySelectorAll(".bolinha").forEach((b, idx) =>
      b.classList.toggle("ativa", idx === slideAtual));
  }
  function reiniciarAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => irParaSlide(slideAtual + 1), 5000);
  }

  document.getElementById("seta-esq").addEventListener("click", () => { irParaSlide(slideAtual - 1); reiniciarAutoplay(); });
  document.getElementById("seta-dir").addEventListener("click", () => { irParaSlide(slideAtual + 1); reiniciarAutoplay(); });
  bolinhasEl.addEventListener("click", e => {
    const b = e.target.closest(".bolinha");
    if (b) { irParaSlide(Number(b.dataset.slide)); reiniciarAutoplay(); }
  });

  let toqueX = 0;
  slidesEl.addEventListener("touchstart", e => toqueX = e.touches[0].clientX, { passive: true });
  slidesEl.addEventListener("touchend", e => {
    const delta = e.changedTouches[0].clientX - toqueX;
    if (Math.abs(delta) > 50) {
      irParaSlide(slideAtual + (delta < 0 ? 1 : -1));
      reiniciarAutoplay();
    }
  }, { passive: true });

  /* ---------- HEADER COMPACTO AO ROLAR ---------- */
  window.addEventListener("scroll", () => {
    headerEl.classList.toggle("compacto", window.scrollY > 60);
  }, { passive: true });

  /* ---------- ANIMAÇÃO DE REVELAR AO ROLAR ---------- */
  const observador = new IntersectionObserver(entradas => {
    entradas.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visivel");
        observador.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".revelar").forEach(el => observador.observe(el));

  /* ---------- INICIALIZAÇÃO ---------- */
  renderFiltros();
  atualizar();
  renderCarrossel();
  reiniciarAutoplay();
});