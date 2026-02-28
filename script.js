const publications = [
  {
    title: "Representations Shape Weak-to-Strong Generalization: Theoretical Insights and Empirical Predictions",
    paperUrl: "https://arxiv.org/abs/2502.00620",
    authors: "Yihao Xue, Jiping Li, Baharan Mirzasoleiman",
    venue: "ICML, 2025"
  },
  {
    title: "Few-shot Adaption to Distribution Shifts By Mixing Source and Target Embeddings",
    paperUrl: "https://arxiv.org/abs/2305.14521",
    authors: "Yihao Xue, Ali Payani, Yu Yang, Baharan Mirzasoleiman",
    venue: "ICML, 2024"
  },
  {
    title: "Investigating the Impact of Model Width and Density on Generalization in Presence of Label Noise",
    paperUrl: "https://arxiv.org/abs/2208.08003",
    authors: "Yihao Xue, Kyle Whitecross, Baharan Mirzasoleiman",
    venue: "UAI, 2024",
    highlight: "Spotlight"
  },
  {
    title: "Understanding the Robustness of Multi-modal Contrastive Learning to Distribution Shift",
    paperUrl: "https://arxiv.org/pdf/2310.04971.pdf",
    authors: "Yihao Xue, Siddharth Joshi, Dang Nguyen, Baharan Mirzasoleiman",
    venue: "ICLR, 2024"
  },
  {
    title: "Investigating the Benefits of Projection Head for Representation Learning",
    paperUrl: "https://openreview.net/pdf?id=GgEAdqYPNA",
    authors: "Yihao Xue, Eric Gan, Jiayi Ni, Siddharth Joshi, Baharan Mirzasoleiman",
    venue: "ICLR, 2024"
  },
  {
    title: "Which Features are Learnt by Contrastive Learning? On the Role of Simplicity Bias in Class Collapse and Feature Suppression.",
    paperUrl: "https://arxiv.org/abs/2305.16536",
    authors: "Yihao Xue, Siddharth Joshi, Eric Gan, Pin-Yu Chen, Baharan Mirzasoleiman",
    venue: "ICML, 2023",
    highlight: "Oral Presentation, 2.37%",
    projectUrl: "https://sjoshi804.github.io/icml-cc-fs/"
  },
  {
    title: "Investigating Why Contrastive Learning Benefits Robustness Against Label Noise",
    paperUrl: "https://arxiv.org/abs/2201.12498",
    authors: "Yihao Xue, Kyle Whitecross, Baharan Mirzasoleiman",
    venue: "ICML, 2022"
  }
];

const preprints = [
  {
    title: "Beyond What Seems Necessary: Hidden Gains from Scaling Training-Time Reasoning Length under Outcome Supervision",
    paperUrl: "https://arxiv.org/abs/2602.00927",
    authors: "Yihao Xue, Allan Zhang, Jianhao Huang, Amit Sahai, Baharan Mirzasoleiman"
  },
  {
    title: "LoRA is All You Need for Safety Alignment of Reasoning LLMs",
    paperUrl: "https://arxiv.org/abs/2507.17075",
    authors: "Yihao Xue, Baharan Mirzasoleiman",
    codeUrl: "https://github.com/YihaoXue/lora-safety-reasoning"
  },
  {
    title: "Verify when Uncertain: Beyond Self-Consistency in Black Box Hallucination Detection",
    paperUrl: "https://arxiv.org/abs/2502.15845",
    authors: "Yihao Xue, Kristjan Greenewald, Youssef Mroueh, Baharan Mirzasoleiman"
  },
  {
    title: "Towards Mitigating Spurious Correlations in the Wild: A Benchmark & a more Realistic Dataset",
    paperUrl: "https://arxiv.org/abs/2306.11957",
    authors: "Siddharth Joshi, Yu Yang, Yihao Xue, Wenhan Yang, Baharan Mirzasoleiman"
  }
];

function renderPapers(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "paper-card";

    const links = [`<a href="${item.paperUrl}" target="_blank" rel="noreferrer">Paper</a>`];
    if (item.projectUrl) {
      links.push(`<a href="${item.projectUrl}" target="_blank" rel="noreferrer">Project Page</a>`);
    }
    if (item.codeUrl) {
      links.push(`<a href="${item.codeUrl}" target="_blank" rel="noreferrer">Code</a>`);
    }

    article.innerHTML = `
      <h3>${item.title}</h3>
      <p class="paper-authors">${item.authors}</p>
      ${item.venue ? `<p class="paper-venue">${item.venue}</p>` : ""}
      ${item.highlight ? `<p class="paper-highlight">${item.highlight}</p>` : ""}
      <p class="paper-links">${links.join(" <span class=\"divider\">|</span> ")}</p>
    `;

    container.appendChild(article);
  });
}

renderPapers(publications, "publicationList");
renderPapers(preprints, "preprintList");

document.getElementById("year").textContent = new Date().getFullYear();
