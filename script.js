const facets = [
  {
    id: "selecting", tone: "case", number: "01", title: "Selecting the Micro Case",
    summary: "The first facet concerns how designers select micro cases that can support the broader story. In this process, designers need to consider the grounding of the selected case, its representational type in relation to the broader population, and its correspondence with macro data.",
    dimensions: [
      { id: "case-grounding", title: "Case Grounding", definition: "This dimension describes how micro cases represent real-world individuals and experiences.", choices: [
        ["Real individual", "48", "A", "A real individual centers the narrative on a specific existing person and their lived experience."],
        ["Curated persona", "7", "B", "A curated persona does not correspond to a single individual but synthesizes shared characteristics or experiences from multiple real individuals."]
      ]},
      { id: "representational-type", title: "Representational Type", definition: "This dimension describes how the situation represented by a micro case relates to the broader population.", choices: [
        ["Typical case", "38", "C", "A typical case aligns with common situations or dominant trends, allowing broader patterns to be illustrated through a concrete experience."],
        ["Subgroup case", "6", "D", "A subgroup case corresponds to a specific group within the population and highlights how that group differs from the whole."],
        ["Exceptional case", "5", "E", "An exceptional case substantially deviates from common patterns or dominant trends."],
        ["Any case", "16", "F", "An any case strategy does not rely on predefined selection criteria and allows any individual case to enter the micro narrative."]
      ]},
      { id: "data-correspondence", title: "Data Correspondence", definition: "This dimension describes how micro cases correspond to macro datasets.", choices: [
        ["Record linked", "26", "G", "A record linked case is directly drawn from the macro dataset and linked to a specific record within it."],
        ["Attribute matched", "22", "H", "An attribute matched case does not belong to the dataset itself, but the individual’s attributes match a category represented in the data."],
        ["Contextually related", "10", "I", "A contextually related case does not correspond to a specific record or subgroup, but the case’s experience occurs within the same broader phenomenon or context represented by the macro data."]
      ]}
    ]
  },
  {
    id: "constructing", tone: "narrative", number: "02", title: "Constructing the Micro Narrative",
    summary: "The second facet concerns how designers develop the micro narrative itself from the selected case. In this process, designers need to consider which elements to select and organize as narrative content, and how to realize them through visual representation.",
    dimensions: [
      { id: "narrative-content", title: "Narrative Content", definition: "This dimension describes the types of case materials selected to construct the micro narrative.", choices: [
        ["Background attributes", "30", "J", "A micro narrative may focus on background attributes, such as age, occupation, family situation, or living environment, which provide contextual information."],
        ["Events and actions", "29", "K", "A micro narrative may focus on events and actions, presenting specific experiences and behaviors."],
        ["Personal voice", "8", "L", "A micro narrative may incorporate personal voice by preserving an individual’s perspectives, attitudes, and emotions."],
        ["Changing states", "6", "G", "A micro narrative may highlight changing states, showing how a person’s conditions, circumstances, or attributes change across stages or contexts."]
      ]},
      { id: "visual-representation", title: "Visual Representation", definition: "This dimension describes how the selected case materials are visually represented.", choices: [
        ["Original material", "22", "M", "A micro narrative may use original material, preserving records such as photographs, direct quotations, and videos."],
        ["Illustrated character", "22", "N", "A micro narrative may transform individuals and their experiences into an illustrated character, using redrawn figures and simplified or dramatized representations."],
        ["Icon", "15", "O", "An icon provides a more generalized representation through consistent visual symbols."],
        ["Data-encoded figure", "9", "F", "A data-encoded figure incorporates individual attributes or experiences into the visual form itself, allowing the representation to convey both personal information and data."]
      ]}
    ]
  },
  {
    id: "connecting", tone: "connection", number: "03", title: "Connecting Micro and Macro",
    summary: "The third facet concerns how designers connect micro narratives with macro data to establish relationships between the two scales. In this process, designers need to consider how narrative connections are established through micro-macro organization and narrative position, how visual connections are created through spatial relationship and visual linkage, and how interaction supports transition between scales.",
    dimensions: [
      { id: "micro-macro-organization", title: "Micro–Macro Organization", definition: "This dimension describes how micro and macro narratives are organized within a data story.", choices: [
        ["Macro-led", "16", "P", "A macro-led organization uses the macro narrative as the main storyline, with micro narratives explaining or substantiating the broader phenomenon."],
        ["Micro-led", "26", "A", "A micro-led organization follows the micro narrative, with macro information providing broader context and meaning."],
        ["Micro-aggregated", "13", "O", "A micro-aggregated organization presents a broader phenomenon by aggregating, comparing, or synthesizing multiple micro narratives."]
      ]},
      { id: "narrative-position", title: "Narrative Position", definition: "This dimension describes the role of micro narratives in the progression of the broader narrative.", choices: [
        ["Entry", "31", "N", "A micro narrative positioned as an entry establishes the issue through a specific personal experience and introduces subsequent macro-level discussion."],
        ["Elaboration", "46", "E", "A micro narrative positioned as an elaboration supplements macro content by revealing the processes or impacts behind broader patterns."],
        ["Reflection", "6", "G", "A micro narrative positioned as a reflection returns to individual consequences or meanings after macro-level discussion, encouraging readers to reconsider what the data represents."]
      ]},
      { id: "spatial-relationship", title: "Spatial Relationship", definition: "This dimension describes how micro and macro information is organized within visual space.", choices: [
        ["Separated", "34", "P", "A separated arrangement places the two scales in independent areas, requiring readers to move between them to establish a connection."],
        ["Embedded", "7", "O", "An embedded arrangement makes micro narratives local elements within a macro-level visualization."],
        ["Juxtaposed", "19", "A", "A juxtaposed arrangement presents information from both scales side by side, facilitating comparison."],
        ["Layered", "5", "C", "A layered arrangement represents different scales through visual or interaction layers within the same space."]
      ]},
      { id: "visual-linkage", title: "Visual Linkage", definition: "This dimension describes how visual cues establish recognizable correspondence between micro and macro.", choices: [
        ["Explicit annotation", "36", "M", "Explicit annotation uses text, labels, or annotations to state the relationship between micro and macro directly."],
        ["Shared encoding", "26", "Q", "Shared encoding reuses colors, shapes, or icons to indicate correspondence across scales."],
        ["Visual highlighting", "12", "G", "Visual highlighting emphasizes the corresponding micro case within the macro view, helping readers locate the individual in the broader dataset."],
        ["Connecting marks", "3", "E", "Connecting marks, such as lines, arrows, or paths, directly link information across scales."]
      ]},
      { id: "transition", title: "Transition", definition: "This dimension describes how readers move between micro and macro scales.", choices: [
        ["Guided progression", "47", "A", "Guided progression uses scrolling, playback, or similar interactions to introduce information across scales in a predefined sequence."],
        ["Direct selection", "16", "F", "Direct selection allows readers to access micro narratives from a macro view."],
        ["Filtered exploration", "4", "R", "Filtered exploration allows readers to specify attributes or categories and examine cases that meet those conditions."],
        ["Hierarchical navigation", "8", "S", "Hierarchical navigation enables readers to move from overview-level to fine-grained information through zooming or expansion."]
      ]}
    ]
  }
];

const index = document.querySelector("#framework-index");
const content = document.querySelector("#framework-content");

function renderFramework() {
  index.innerHTML = facets.map(facet => `
    <div class="index-group ${facet.tone}">
      <div class="index-facet">${facet.title}</div>
      <div class="index-dimensions">
        ${facet.dimensions.map(dimension => `<a href="#${dimension.id}">${dimension.title}</a>`).join("")}
      </div>
    </div>`).join("");

  content.innerHTML = facets.map(facet => `
    <article class="facet-section ${facet.tone}">
      <header class="facet-header">
        <h1>${facet.title}</h1>
        <p>${facet.summary}</p>
      </header>
      ${facet.dimensions.map(dimension => `
        <section class="dimension" id="${dimension.id}">
          <header class="dimension-header">
            <h2>${dimension.title}</h2>
            <p>${dimension.definition}</p>
          </header>
          <div class="choices-grid">
            ${dimension.choices.map(choice => `
              <article class="choice-card">
                <div class="choice-image"><img src="img-design/${choice[2]}.png" alt="Example illustrating ${choice[0]}" loading="lazy"></div>
                <div class="choice-body">
                  <div class="choice-title-row"><h3>${choice[0]}</h3></div>
                  <p>${choice[3]}</p>
                </div>
              </article>`).join("")}
          </div>
        </section>`).join("")}
    </article>`).join("");
}

renderFramework();
