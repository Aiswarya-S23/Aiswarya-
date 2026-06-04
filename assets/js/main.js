/* Aiswarya Portfolio - main.js (multi-page) */

const IMG='';

const PROJECTS=[
  {
    id:'sum26', num:'01', coverIn:'project-1/proj-1-cover reveal in.webp', about:'<p><b>Key Creative Elements Inside:</b></p><p><b>Concept Foundations:</b> Mood Boards, Curated Seasonal Color Palettes & Print Inspiration Boards.</p><p><b>Technical Design:</b> Production-Ready CAD Technical Sheets & Embellishment Artwork Specifications.</p><p><b>Visual Presentation:</b> Advanced AI Model Concept Simulations for Realistic Commercial Visualization.</p>', gallery:['project-1/Project 1.004.webp','project-1/Project 1.005.webp','project-1/Project 1.006.webp','project-1/Project 1.007.webp','project-1/Project 1.008.webp','project-1/Project 1.009.webp','project-1/Project 1.010.webp','project-1/Project 1.011.webp','project-1/Project 1.012.webp','project-1/Project 1.013.webp','project-1/Project 1.014.webp','project-1/Project 1.015.webp','project-1/Project 1.016.webp','project-1/Project 1.017.webp','project-1/Project 1.018.webp','project-1/Project 1.019.webp','project-1/Project 1.020.webp','project-1/Project 1.021.webp','project-1/Project 1.022.webp','project-1/Project 1.023.webp','project-1/Project 1.024.webp','project-1/Project 1.025.webp','project-1/Project 1.026.webp','project-1/Project 1.027.webp','project-1/Project 1.028.webp','project-1/Project 1.029.webp','project-1/Project 1.030.webp','project-1/Project 1.031.webp','project-1/Project 1.032.webp','project-1/Project 1.033.webp','project-1/Project 1.034.webp','project-1/Project 1.035.webp','project-1/Project 1.036.webp','project-1/Project 1.037.webp','project-1/Project 1.038.webp','project-1/Project 1.039.webp','project-1/Project 1.040.webp','project-1/Project 1.041.webp','project-1/Project 1.042.webp'],
    title:['Women\u2019s Wear Collection ','<b>SUM 26</b>'],
    titleFlat:'Women\u2019s Wear Collection \u2014 SUM 26',
    category:'Women\u2019s Fashion Design',
    cover:'home/proj-1-cover.webp',
    home:true,
    blurb:'A sunlit French-Riviera womenswear story carried from mood board to production-ready CAD, embellishment artwork and AI-rendered commercial visualisation.',
    intro:'A complete womenswear development for Summer 2026 \u2014 built from concept foundations through production-ready technical design and advanced AI model visualisation.',
    lead:'A summer drawn from the <b>French Riviera</b> \u2014 effortless, sunlit, coastal and romantic \u2014 translated into a commercially-ready womenswear collection.',
    process:['Mood Boards & Concept Foundations','Seasonal Color Palettes','Print Inspiration Boards','Production-Ready CAD Technical Sheets','Embellishment Artwork Specifications','AI Fashion Model Visualisation'],
    blocks:[
      {type:'single', img:'sum_mood_riviera.jpg', t:'A Summer in the French Riviera', i:'Mood Board / 01'},
      {type:'pair', items:['sum_print_riviera.jpg','sum_cad_paisley.jpg']},
      {type:'interlude', q:'Concept becomes <b>cloth</b> \u2014 every print, palette and stitch resolved before a single sample is cut.', src:'Concept \u2192 Technical Design'},
      {type:'single', img:'sum_ai_paisley.jpg', t:'Realistic Commercial Simulation', i:'AI Visualisation / 02'},
      {type:'gallery', label:'Visual Narrative', title:'From <b>sketch</b> to simulation', items:[
        {img:'sum_mood_aussi.jpg', cap:'Aussi Gold Coast \u2014 Mood'},
        {img:'sum_print_aussi.jpg', cap:'Print Inspiration'},
        {img:'sum_cad_floral.jpg', cap:'CAD Technical Sheet'},
        {img:'sum_ai_floral.jpg', cap:'AI Model Concept'},
        {img:'sum_cad_schiffli.jpg', cap:'Embellishment Spec'},
        {img:'sum_ai_embroidery.jpg', cap:'Embroidered Story'}
      ]},
      {type:'palette', label:'Seasonal Direction', title:'The <b>SUM 26</b> palette', sw:['6B86AA','B9B8D6','E6F0FA','A7C9D6','BFE3D7','C9D88F','F3E7A6','FFC37A','E15C7D','F6CAD0']},
      {type:'single', img:'sum_cad_kangaroo.jpg', t:'CAD & Embellishment Detail', i:'Technical Layer / 03'},
      {type:'pair', items:['sum_mood_capecod.jpg','sum_print_capecod.jpg']},
      {type:'single', img:'sum_ai_kangaroo.jpg', t:'Cape Cod \u2014 Commercial Render', i:'AI Visualisation / 04'}
    ]
  },
  {
    id:'research', num:'02', coverIn:'project-2/proj-2-cover reveal in.webp', gallery:['project-2/ChatGPT Image Jun 2, 2026, 07_49_32 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 07_49_55 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 07_49_58 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 07_50_00 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 07_50_02 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 07_50_04 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 07_50_07 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 08_35_47 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 08_35_53 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 08_35_59 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 08_36_04 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 08_36_07 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 08_36_10 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 08_36_15 PM.webp','project-2/ChatGPT Image Jun 2, 2026, 08_36_22 PM.webp'],
    title:['Research & Product ','<b>Developments</b>'],
    titleFlat:'Research & Product Developments',
    category:'Men\u2019s \u00b7 Women\u2019s \u00b7 Kidswear',
    cover:'home/proj-2-cover.webp',
    home:true,
    blurb:'Market-driven design across men\u2019s, women\u2019s and kidswear \u2014 trend-forecast led, competitor-analysed and engineered for real-world buyers.',
    about:'<p><b>Market-Driven Design:</b> Developed for Men’s, Women’s, and Kids’ categories using market intelligence and competitor analysis.</p><p><b>Trend Forecasting:</b> Built around future fabric, color, silhouette, and graphic trends from WGSN and Fashion Snoops.</p><p><b>Commercial Success:</b> Engineered for real-world buyers, with some select styles already capturing bulk production orders.</p>',
   intro:'Product development across three categories \u2014 grounded in market intelligence, competitor analysis and forward trend forecasting from WGSN and Fashion Snoops.',
    lead:'Design built for <b>real buyers</b> \u2014 future fabric, colour, silhouette and graphic trends engineered into commercially successful product.',
    process:['Market Intelligence & Competitor Analysis','Trend Forecasting \u2014 WGSN / Fashion Snoops','Menswear Development','Womenswear Development','Kidswear Development','Bulk Production Orders Secured'],
    blocks:[
      {type:'single', img:'rpd_mens_sailing.jpg', t:'Graphic & Embroidery Development', i:'Menswear / 01'},
      {type:'pair', items:['rpd_womens_embellish.jpg','rpd_womens_lace.jpg']},
      {type:'interlude', q:'Three categories, one discipline \u2014 research that turns <b>trend signals</b> into orders.', src:'Menswear \u2014 Womenswear \u2014 Kidswear'},
      {type:'single', img:'rpd_womens_tommy.jpg', t:'Brand-Led Graphic Studies', i:'Womenswear / 02'},
      {type:'gallery', label:'Visual Narrative', title:'Across <b>every</b> category', items:[
        {img:'rpd_kids_tops.jpg', cap:'Kidswear \u2014 Tops'},
        {img:'rpd_kids_graphic.jpg', cap:'Kidswear \u2014 Graphic Tees'},
        {img:'rpd_womens_embellish.jpg', cap:'Womens \u2014 Embellishment'},
        {img:'rpd_womens_lace.jpg', cap:'Womens \u2014 Lace Detailing'},
        {img:'rpd_mens_sailing.jpg', cap:'Mens \u2014 Sailing Graphics'}
      ]},
      {type:'single', img:'rpd_kids_graphic.jpg', t:'Destination Graphic Stories', i:'Kidswear / 04'}
    ]
  },
  {
    id:'merch', num:'03', coverIn:'project-3/proj-3-cover reveal in.webp', gallery:['project-3/Project 3 JPEG.004.webp','project-3/Project 3 JPEG.005.webp','project-3/Project 3 JPEG.006.webp'],
    title:['Visual ','<b>Merchandising</b>'],
    titleFlat:'Visual Merchandising',
    category:'Fashion Retail & Spatial Styling',
    cover:'home/proj-3-cover.webp',
    home:true,
    blurb:'Showroom environments built for buying visits \u2014 spatial fashion presentation, retail storytelling and architectural product-display systems.',
    about:'<p><b>The Purpose:</b> Concept and execute specialized showroom environments for visiting global buyers across Men’s, Women’s, and Kids’ categories.</p><p><b>The Strategy:</b> Develop story-driven sample displays, layouts, and color stories tailored to each client’s unique identity.</p><p><b>The Goal:</b> Bridge the gap between initial product design and high-impact buyer presentation.</p>',
   intro:'Showroom set-up and spatial styling for buying visits \u2014 retail storytelling translated into architecturally composed product display.',
    lead:'The showroom as <b>narrative</b> \u2014 spatial composition, seasonal storytelling and product display engineered for the buyer\u2019s eye.',
    process:['Showroom Setup for Buying Visits','Spatial Fashion Presentation','Retail Storytelling','Product Display Systems','Seasonal Window Concepts','Architectural Merchandising Layouts'],
    blocks:[
      {type:'single', img:'vm_showroom_wide.jpg', t:'The Buying-Visit Environment', i:'Showroom / 01'},
      {type:'pair', items:['vm_mens_setup.jpg','vm_kids_rack.jpg']},
      {type:'interlude', q:'Retail as a <b>set</b> \u2014 every rack, prop and sightline directs the buyer through the season.', src:'Spatial Fashion Presentation'},
      {type:'gallery', label:'Visual Narrative', title:'Spatial <b>compositions</b>', items:[
        {img:'vm_mens_setup.jpg', cap:'Menswear Setup'},
        {img:'vm_kids_rack.jpg', cap:'Kidswear Display'},
        {img:'vm_showroom_wide.jpg', cap:'Full Showroom'}
      ]}
    ]
  },
  {
    id:'beyond', num:'04', coverIn:'project-4/proj-4-cover reveal in.webp', gallery:['project-4/Project 4 JPEG.002.webp','project-4/Project 4 JPEG.003.webp','project-4/Project 4 JPEG.004.webp','project-4/Project 4 JPEG.005.webp','project-4/Project 4 JPEG.006.webp','project-4/Project 4 JPEG.007.webp','project-4/Project 4 JPEG.008.webp','project-4/Project 4 JPEG.009.webp','project-4/Project 4 JPEG.010.webp','project-4/Project 4 JPEG.011.webp','project-4/Project 4 JPEG.012.webp','project-4/Project 4 JPEG.013.webp','project-4/Project 4 JPEG.014.webp','project-4/Project 4 JPEG.015.webp','project-4/Project 4 JPEG.016.webp','project-4/Project 4 JPEG.017.webp','project-4/Project 4 JPEG.018.webp','project-4/Project 4 JPEG.019.webp','project-4/Project 4 JPEG.020.webp','project-4/Project 4 JPEG.021.webp','project-4/Project 4 JPEG.022.webp','project-4/Project 4 JPEG.023.webp','project-4/Project 4 JPEG.024.webp','project-4/Project 4 JPEG.025.webp','project-4/Project 4 JPEG.026.webp'],
    title:['Beyond ','<b>Basics</b>'],
    titleFlat:'Beyond Basics',
    category:'Uniform Design & Lifestyle Apparel',
    cover:'home/proj-4-cover.webp',
    home:false,
    blurb:'Elevated utility wear \u2014 school uniforms and the Mango Hills Resort uniform collection, designed as premium lifestyle apparel systems.',
    about:'<p>Explored uniform design beyond traditional basics through innovative, functional concepts, with branding as a key focus.</p><p>Designed user-focused uniforms for resort staff, school students, and faculty, enhancing comfort, identity, and brand presence.</p><p>Strengthened my skills in creating practical, visually appealing, and branding-driven uniform solutions.</p>',
   intro:'Elevated utility wear \u2014 a full uniform programme for Mango Hills Resort spanning every operational department, plus school-uniform design.',
    lead:'Uniform as <b>identity</b> \u2014 utility wear elevated into premium, lifestyle-focused apparel systems for hospitality and education.',
    process:['School Uniform Design','Mango Hills Resort \u2014 Operations','F&B Service & Production','Kitchen Stewarding','Engineering & Technical Wear','City Hotel & Hill Destination Variants'],
    blocks:[
      {type:'single', img:'bb_mango_intro.jpg', t:'Mango Hills Resort', i:'Uniform Collection / 01'},
      {type:'pair', items:['bb_operations.jpg','bb_fb_service.jpg']},
      {type:'interlude', q:'A single resort, <b>nine</b> departments \u2014 one cohesive uniform language across them all.', src:'Elevated Utility Wear'},
      {type:'gallery', label:'Visual Narrative', title:'Across the <b>resort</b>', items:[
        {img:'bb_operations.jpg', cap:'Operations Manager'},
        {img:'bb_fb_service.jpg', cap:'F&B Service'},
        {img:'bb_fb_production.jpg', cap:'F&B Production'},
        {img:'bb_kitchen.jpg', cap:'Kitchen Stewarding'},
        {img:'bb_engineering.jpg', cap:'Engineering'},
        {img:'bb_hill_operations.jpg', cap:'Hill Destination'}
      ]},
      {type:'single', img:'bb_fb_production.jpg', t:'CAD Uniform Specification', i:'Technical Layer / 02'}
    ]
  },
  {
    id:'pack', num:'05', coverIn:'project-5/proj-5-cover reveal in.webp', gallery:['project-5/Project 5 JPEG.001.webp','project-5/Project 5 JPEG.003.webp','project-5/Project 5 JPEG.004.webp','project-5/Project 5 JPEG.005.webp','project-5/Project 5 JPEG.006.webp','project-5/Project 5 JPEG.007.webp','project-5/Project 5 JPEG.008.webp','project-5/Project 5 JPEG.009.webp','project-5/Project 5 JPEG.010.webp','project-5/Project 5 JPEG.011.webp'],
    title:['The Pack ','<b>Edit</b>'],
    titleFlat:'The Pack Edit',
    category:'Accessories Design',
    cover:'home/proj-5-cover.webp',
    home:false,
    blurb:'A premium bag collection \u2014 product-focused editorial photography, leather textures and luxury object storytelling.',
    about:'<p>Expanded my design journey into accessories, exploring bag design as a new and exciting creative challenge.</p><p>Created innovative school and retail bag concepts that combine functionality, user needs, and strong visual appeal.</p>',
   intro:'An accessories project \u2014 a premium bag collection developed as a product-focused campaign exploring leather, texture and form.',
    lead:'The object as <b>hero</b> \u2014 a bag collection developed through leather texture, product editorial and luxury campaign storytelling.',
    process:['Bag Collection Concept','Leather & Material Exploration','Premium Accessories Campaign','Product-Focused Photography','Luxury Object Storytelling','Collection Curation'],
    blocks:[
      {type:'interlude', q:'An accessories chapter <b>in development</b> \u2014 leather textures and luxury object storytelling, currently being curated.', src:'The Pack Edit \u2014 Coming Soon'}
    ]
  },
  {
    id:'freelance', num:'06', coverIn:'project-6/proj-6-cover reveal in.webp', gallery:['project-6/Project 6 JPEG.001.webp','project-6/Project 6 JPEG.004.webp','project-6/Project 6 JPEG.005.webp','project-6/Project 6 JPEG.006.webp','project-6/Project 6 JPEG.007.webp','project-6/Project 6 JPEG.008.webp','project-6/Project 6 JPEG.009.webp','project-6/Project 6 JPEG.010.webp','project-6/Project 6 JPEG.011.webp','project-6/Project 6 JPEG.012.webp'],
    title:['Freelance ','<b>Work</b>'],
    titleFlat:'Freelance Work',
    category:'Freelance Creative Projects',
    cover:'home/proj-6-cover.webp',
    home:false,
    blurb:'Diverse creative capability \u2014 brand identity and logo design, plus a plus-size gym-wear concept built on confidence and inclusive activewear styling.',
    about:'<p>A collection of freelance projects, including logo design and creative problem-solving concepts.</p><p>Demonstrates my passion for exploring new challenges, developing innovative solutions, and continuously expanding my design skills.</p>',
   intro:'A range of independent commissions \u2014 brand identity and logo design alongside an inclusive plus-size activewear concept.',
    lead:'Creative range \u2014 from <b>brand identity</b> to inclusive activewear, designed with bold, contemporary direction.',
    process:['Logo & Brand Identity Design','Packaging & Collateral','Plus-Size Gym Wear Concept','Inclusive Activewear Styling','CAD Development','Contemporary Brand Exploration'],
    blocks:[
      {type:'single', img:'fl_logo_sweethabit.jpg', t:'A Sweet Habit \u2014 Identity', i:'Logo Design / 01'},
      {type:'pair', items:['fl_sweethabit_packaging.jpg','fl_logo_bunstick.jpg']},
      {type:'interlude', q:'Made for every body \u2014 activewear designed around <b>confidence</b>, comfort and performance.', src:'Plus-Size Gym Wear'},
      {type:'single', img:'fl_gymwear_board.jpg', t:'Plus-Size Gym Wear Concept', i:'Concept Board / 02'},
      {type:'gallery', label:'Visual Narrative', title:'Identity & <b>activewear</b>', items:[
        {img:'fl_logo_sweethabit.jpg', cap:'Brand Identity'},
        {img:'fl_sweethabit_packaging.jpg', cap:'Packaging System'},
        {img:'fl_logo_bunstick.jpg', cap:'Logo \u2014 The Bun & The Stick'},
        {img:'fl_gymwear_board.jpg', cap:'Gym Wear Concept'},
        {img:'fl_gymwear_look.jpg', cap:'CAD \u2014 Look 01'}
      ]},
      {type:'single', img:'fl_gymwear_look.jpg', t:'Activewear CAD Development', i:'Technical Layer / 03'}
    ]
  }
];

const ROLES=[
  {t:'Fashion Designer', d:'Four years across premium global apparel brands.'},
  {t:'Creative Designer', d:'Shaping concept, mood and visual direction end to end.'},
  {t:'Visual Storyteller', d:'Translating collections into compelling fashion narrative.'},
  {t:'Concept Developer', d:'Building seasonal worlds from research to realisation.'},
  {t:'Apparel Specialist', d:'CAD, embellishment and production-ready technical design.'},
  {t:'Research & Product Dev', d:'Trend-led development engineered for real-world buyers.'}
];

const BRANDS=['Tommy Hilfiger','Nautica','GAP','DKNY','Lucky Brand','American Eagle',
  'Zara','Bershka','Old Navy','Roxy','JCPenney','Billabong','Volcom','Morgan',
  'Target','Walmart','Costco','Carrefour'];

/* ============================================================
   RENDER HELPERS
   ============================================================ */
function frame(img, alt, cls=''){
  const base = (window.__BASE||'./') + 'assets/images/';
  const src = /^https?:|^\//.test(img) ? img : (/assets\//.test(img) ? (window.__BASE||'./')+img : base+img);
  return `<div class="frame ${cls}"><img src="${src}" alt="${alt||''}" loading="lazy"></div>`;
}

function homeView(){
  const featured=PROJECTS.filter(p=>p.home);
  const feat=featured.map((p,i)=>`
    <article class="feat-item reveal" data-link="project:${p.id}">
      <div class="feat-visual">${frame(p.cover,p.titleFlat,'hover-zoom')}</div>
      <div class="feat-info">
        <div class="fnum">Featured \u2014 ${p.num} / 0${featured.length}</div>
        <h3>${p.title.join('')}</h3>
        <div class="fcat">${p.category}</div>
        <p>${p.blurb}</p>
        <span class="btn-link">View Project <span class="ar"></span></span>
      </div>
    </article>`).join('');

  return `
  <section class="view-home">
    <section class="section wrap">
      <div class="intro">
        <div class="intro-photo reveal">${frame('home/aiswarya_dp.webp','Aiswarya \u2014 Fashion Designer')}</div>
        <div class="intro-copy">
          <div class="eyebrow reveal">Hello</div>
          <h2 class="reveal">I\u2019m <b>Aiswarya</b></h2>
          <p class="reveal">I\u2019m a fashion designer who loves turning ideas into stylish
            little stories through fabrics, colors, and details. I enjoy experimenting
            with trends, creating unique designs, and adding a touch of creativity to
            everything I make \u2014 because fashion should always feel fun, expressive,
            and personal.</p>
          <div class="sign reveal"><span class="ln"></span>Aiswarya, Fashion Designer & Creative Designer</div>
        </div>
      </div>
    </section>

    <section class="section wrap" style="padding-top:0;">
      <div class="shead">
        <h2 class="reveal">Brand <b>Experience</b></h2>
        <div class="scount reveal">Premium Global Brands</div>
      </div>
      <div class="reveal">${frame('home/brand_experience.webp','Brand Experience')}</div>
    </section>

    <section class="section wrap" style="padding-top:0;">
      <div class="shead">
        <h2 class="reveal">Featured <b>Work</b></h2>
        <div class="scount reveal">Selected \u2014 Three Projects</div>
      </div>
      <div class="feat">${feat}</div>
    </section>

    <section class="section wrap" style="padding-top:0;">
      <div class="strip reveal">
        <h3>Explore all <b>six projects</b><br>across the full practice.</h3>
        <span class="btn-link" data-link="work">Open Work <span class="ar"></span></span>
      </div>
    </section>

    ${footer()}
  </section>`;
}

/* ---------- WORK ---------- */
function workView(){
  const rows=PROJECTS.map(p=>`
    <article class="work-item reveal" data-link="project:${p.id}">
      <div class="wnum">\u2014 ${p.num}</div>
      <div class="winfo">
        <h3>${p.title.join('')}</h3>
        <div class="wtags">${p.category.split(' \u00b7 ').map(t=>`<span>${t}</span>`).join('')}</div>
        <p>${p.blurb}</p>
        <span class="btn-link">Open Project <span class="ar"></span></span>
      </div>
      <div class="wvisual">${frame(p.cover,p.titleFlat,'hover-zoom')}</div>
    </article>`).join('');

  return `
  <section class="view-work">
    <header class="page-head wrap">
      <h1>The <b>Work.</b></h1>
      <p>Six chapters of a fashion practice \u2014 from a sunlit womenswear collection
        to research, retail, uniforms, accessories and independent commissions.</p>
    </header>
    <section class="section wrap" style="padding-top:0;">
      <div class="work-list">${rows}</div>
    </section>
    ${footer()}
  </section>`;
}

/* ---------- PROJECT DETAIL ---------- */
function projectView(p){
  const idx=PROJECTS.findIndex(x=>x.id===p.id);
  const next=PROJECTS[(idx+1)%PROJECTS.length];

  const blocks=p.blocks.map(b=>{
    if(b.type==='single'){
      return `<div class="reveal">
        <div class="block-single">${frame(b.img,b.t,'hover-zoom')}</div>
        <div class="block-cap"><span class="bc-t">${b.t}</span><span class="bc-i">${b.i}</span></div>
      </div>`;
    }
    if(b.type==='pair'){
      return b.items.map(it=>`<div class="reveal">
        <div class="block-single">${frame(it,'','hover-zoom')}</div>
      </div>`).join('');
    }
    if(b.type==='interlude'){
      return `<div class="interlude reveal">
        <p>${b.q}</p><div class="src">${b.src}</div>
      </div>`;
    }
    if(b.type==='gallery'){
      return `<div class="gallery reveal">
        <div class="g-head">
          <div class="pa-label">${b.label}</div>
          <h3>${b.title}</h3>
        </div>
        ${b.items.map(it=>`<div class="reveal" style="margin-bottom:clamp(16px,2.4vw,34px);">
          <div class="block-single">${frame(it.img,it.cap,'hover-zoom')}</div>
          <div class="block-cap"><span class="bc-t">${it.cap}</span></div>
        </div>`).join('')}
      </div>`;
    }
    if(b.type==='palette'){
      return `<div class="palette-sec reveal">
        <div class="pa-label">${b.label}</div>
        <h3>${b.title}</h3>
        <div class="swatches">
          ${b.sw.map(h=>`<div class="swatch"><div class="sw-color" style="background:#${h}"></div><div class="sw-hex">#${h}</div></div>`).join('')}
        </div>
      </div>`;
    }
    return '';
  }).join('');

  return `
  <section class="view-project">
    <header class="proj-head wrap">
      <div class="pnum">Project ${p.num} / 06</div>
      <h1>${p.title.join('')}</h1>
      <div class="pcat">${p.category}</div>
    </header>

    <div class="wrap">
      <div class="proj-cover reveal">${frame(p.coverIn||p.cover,p.titleFlat)}</div>

      <div class="proj-intro reveal">${p.about||`<p>${p.intro}</p>`}</div><div class="proj-about reveal" style="display:none;">
        <div>
          <div class="pa-label">Overview</div>
          <ul>${p.process.map((s,i)=>`<li><span class="li-n">0${i+1}</span>${s}</li>`).join('')}</ul>
        </div>
        <div>
          <div class="pa-lead">${p.lead}</div>
          <p class="pa-desc">${p.intro}</p>
        </div>
      </div>

      <div class="blocks">${(p.gallery||[]).map(g=>`<div class="reveal"><div class="block-single">${frame(g,'')}</div></div>`).join('')}</div>

      <div class="next reveal" data-link="project:${next.id}">
        <div>
          <div class="nx-l">Next Project \u2014 ${next.num}</div>
          <h2>${next.title.join('')}</h2>
        </div>
        <span class="btn-link">Continue <span class="ar"></span></span>
      </div>
    </div>
    ${footer()}
  </section>`;
}

/* ---------- ABOUT ---------- */
function aboutView(){
  return `
  <section class="view-about">
    <header class="page-head wrap" style="padding-bottom:clamp(18px,2.2vw,30px);">
      <div class="about-top">
        <div class="about-copy">
          <div class="eyebrow reveal">About \u2014 The Designer</div>
          <h1 class="reveal">Designing<br><b>fashion worlds.</b></h1>
          <p class="reveal">Aiswarya is a fashion designer with four years of professional
            experience across premium international apparel brands \u2014 a practice
            built on commercial fluency and a sharp visual eye.</p>
          <p class="reveal">From mood board to production-ready CAD, from showroom
            styling to AI-rendered visualisation, her work treats every collection
            as a complete, considered story.</p>
        </div>
        <div class="about-portrait reveal">${frame('home/aiswarya_dp.webp','Aiswarya')}</div>
      </div>
    </header>

    <section class="section wrap infographic">
      <div class="ig-stats reveal">
        <div class="ig-stat"><span class="ig-num">4<i>+</i></span><span class="ig-lbl">Years of professional experience</span></div>
        <div class="ig-stat"><span class="ig-num">15<i>+</i></span><span class="ig-lbl">Global brands designed for</span></div>
        <div class="ig-stat"><span class="ig-num">3</span><span class="ig-lbl">Categories \u00b7 Men \u00b7 Women \u00b7 Kids</span></div>
        <div class="ig-stat"><span class="ig-num">2</span><span class="ig-lbl">Senior design roles held</span></div>
      </div>
      <div class="ig-grid">
        <div class="ig-col ig-timeline reveal">
          <h3 class="ig-h"><b>Experience</b></h3>
          <div class="ig-tl">
            <div class="ig-tl-item">
              <div class="ig-tl-dot"></div>
              <div class="ig-tl-when">2025 \u2014 Present</div>
              <div class="ig-tl-role">Senior / Accessory Designer</div>
              <div class="ig-tl-org">Advanced Clothing Concepts \u00b7 Coimbatore</div>
              <p class="ig-tl-note">Driving innovative school-uniform apparel, accessory &amp; bag development, tech packs and end-to-end product launches for a new retail brand.</p>
            </div>
            <div class="ig-tl-item">
              <div class="ig-tl-dot"></div>
              <div class="ig-tl-when">2022 \u2014 2025</div>
              <div class="ig-tl-role">Fashion Designer / RNPD</div>
              <div class="ig-tl-org">Eastman Exports Global Clothing \u00b7 Tirupur</div>
              <p class="ig-tl-note">Designed menswear, womenswear &amp; kidswear for global brands; led trend forecasting (WGSN, Fashion Snoops), mood boards and price-aligned collections.</p>
            </div>
          </div>
          <h3 class="ig-h"><b>Internships & Early Experience</b></h3>
          <div class="ig-tl">
            <div class="ig-tl-item">
              <div class="ig-tl-dot"></div>
              <div class="ig-tl-when">2021</div>
              <div class="ig-tl-role">Fashion Designer · Product Development</div>
              <div class="ig-tl-org">Garment Manthra Pvt Ltd · Tirupur</div>
              <p class="ig-tl-note">Managed multiple in-house brands; specialised in print development, fabric techniques and sustainable product development across activewear, sleepwear, co-ord sets & kidswear.</p>
            </div>
            <div class="ig-tl-item">
              <div class="ig-tl-dot"></div>
              <div class="ig-tl-when">2021</div>
              <div class="ig-tl-role">Craft Documentation Intern</div>
              <div class="ig-tl-org">Metal Craft Artisans · Tirupur</div>
              <p class="ig-tl-note">Documented traditional Indian metalwork and lost-wax casting, translating artisan workflows into technical reports bridging heritage crafts with modern commercial design.</p>
            </div>
            <div class="ig-tl-item">
              <div class="ig-tl-dot"></div>
              <div class="ig-tl-when">2021</div>
              <div class="ig-tl-role">Brand Study & Fashion Research Intern</div>
              <div class="ig-tl-org">Honcho Baby · Coimbatore</div>
              <p class="ig-tl-note">Led brand and consumer research for a baby apparel brand; analysed market trends, competitors and sustainable fashion via SWOT and survey data to optimise positioning.</p>
            </div>
            <div class="ig-tl-item">
              <div class="ig-tl-dot"></div>
              <div class="ig-tl-when">2021</div>
              <div class="ig-tl-role">Industrial Visit Intern</div>
              <div class="ig-tl-org">Dinesh Textile Mills · Tirupur</div>
              <p class="ig-tl-note">Hands-on experience in garment manufacturing & merchandising — sampling, sourcing, production coordination, quality control and shipment processes.</p>
            </div>
          </div>
        </div>
        <div class="ig-col ig-side">
          <div class="ig-card reveal">
            <h3 class="ig-h"><b>Education</b></h3>
            <div class="ig-edu"><span class="ig-edu-deg">BSc \u2014 Apparel Fashion Design</span><span class="ig-edu-org">NIFT-TEA College of Knitwear Fashion \u00b7 2019\u201322</span></div>
            <div class="ig-edu"><span class="ig-edu-deg">Master in Graphic Design</span><span class="ig-edu-org">Adoro Multimedia Institute \u00b7 2016\u201317</span></div>
            <div class="ig-edu"><span class="ig-edu-deg">Higher Secondary \u00b7 CBSE</span><span class="ig-edu-org">Amrita Vidyalayam \u00b7 2017\u201319</span></div>
          </div>
          <div class="ig-card reveal">
            <h3 class="ig-h"><b>Strengths</b></h3>
            <div class="ig-bar"><span class="ig-bar-l">Apparel Fashion Design<em>81%</em></span><span class="ig-bar-t"><i style="--w:81%"></i></span></div>
            <div class="ig-bar"><span class="ig-bar-l">CAD &amp; Tech Packs<em>88%</em></span><span class="ig-bar-t"><i style="--w:88%"></i></span></div>
            <div class="ig-bar"><span class="ig-bar-l">Trend &amp; Product Research<em>84%</em></span><span class="ig-bar-t"><i style="--w:84%"></i></span></div>
            <div class="ig-bar"><span class="ig-bar-l">Mood Boards &amp; Concept<em>90%</em></span><span class="ig-bar-t"><i style="--w:90%"></i></span></div>
          </div>
          <div class="ig-card reveal">
            <h3 class="ig-h"><b>Software Skills</b></h3>
            <div class="ig-chips">
              <span class="ig-chip">Adobe Illustrator</span>
              <span class="ig-chip">Adobe Photoshop</span>
              <span class="ig-chip">3D Vista</span>
              <span class="ig-chip">CorelDraw</span>
              <span class="ig-chip">PowerPoint</span>
              <span class="ig-chip">Excel</span>
            </div>
          </div>
          <div class="ig-card reveal">
            <h3 class="ig-h"><b>AI Tools Proficiency</b></h3>
            <div class="ig-chips">
              <span class="ig-chip">ChatGPT</span>
              <span class="ig-chip">Gemini</span>
              <span class="ig-chip">XDesign</span>
              <span class="ig-chip">Midjourney</span>
              <span class="ig-chip">Claude</span>
            </div>
          </div>
          <div class="ig-card reveal">
            <h3 class="ig-h"><b>Core Skills</b></h3>
            <div class="ig-chips">
              <span class="ig-chip">Team Collaboration</span>
              <span class="ig-chip">Communication</span>
              <span class="ig-chip">Quick Learning</span>
              <span class="ig-chip">Leadership</span>
              <span class="ig-chip">Research & Analysis</span>
              <span class="ig-chip">Creative Thinking</span>
              <span class="ig-chip">Problem Solving</span>
              <span class="ig-chip">Adaptability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section wrap" style="padding-top:clamp(40px,5vw,70px);">
      <div class="eyebrow reveal">Disciplines \u2014 What I Do</div>
      <div class="roles">
        ${ROLES.map((r,i)=>`
          <div class="role reveal">
            <div class="r-n">0${i+1}</div>
            <div class="r-t"><b>${r.t}</b></div>
            <div class="r-d">${r.d}</div>
          </div>`).join('')}
      </div>
    </section>
    ${footer()}
  </section>`;
}

/* ---------- CONTACT ---------- */
function contactView(){
  return `
  <section class="view-contact">
    <div class="contact wrap">
      <div class="eyebrow reveal">Contact \u2014 Let\u2019s Create</div>
      <h1 class="reveal">Start a<br><b>conversation.</b></h1>
      <a class="c-mail reveal" href="mailto:aishu23007@gmail.com">aishu23007@gmail.com</a>
      <div class="contact-icons reveal">
        <a class="ci" href="mailto:aishu23007@gmail.com" aria-label="Email" title="Email">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7.5l8.5 6 8.5-6"/></svg>
        </a>
        <a class="ci" href="https://www.linkedin.com/in/aiswarya-s-93b354245/" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3 9h4v12H3zM9 9h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z"/></svg>
        </a>
      </div>
    </div>
    ${footer()}
  </section>`;
}

/* ---------- FOOTER ---------- */
function footer(){
  return `
  <footer class="footer">
    <div class="footer-top">
      <div class="f-big">Let\u2019s make<br>something <b>worn.</b></div>
      <nav class="f-nav">
        <a data-link="home">Home</a><a data-link="work">Work</a>
        <a data-link="about">About</a><a data-link="contact">Contact</a>
      </nav>
    </div>
    <div class="footer-bot">
      <span>\u00a9 2026 Aiswarya \u2014 Fashion Studio</span>
      <span>hello@aiswarya.studio</span>
    </div>
  </footer>`;
}

/* ============================================================
   ROUTER
   ============================================================ */


/* ============ MULTI-PAGE BOOTSTRAP ============ */
(function(){
  const path = location.pathname;
  window.__BASE = /\/pages\//.test(path) ? '../' : './';
})();

function routeToUrl(route){
  const B = window.__BASE;
  if(route === 'home') return B + 'index.html';
  if(route === 'work') return B + 'pages/work.html';
  if(route === 'about') return B + 'pages/about.html';
  if(route === 'contact') return B + 'pages/contact.html';
  if(route && route.indexOf('project:') === 0){
    const id = route.split(':')[1];
    const idx = PROJECTS.findIndex(p=>p.id===id);
    return B + 'pages/project-' + (idx+1) + '.html';
  }
  return B + 'index.html';
}

function renderPage(){
  const app = document.getElementById('app');
  const page = document.body.dataset.page || 'home';
  let html = '';
  if(page === 'home') html = homeView();
  else if(page === 'work') html = workView();
  else if(page === 'about') html = aboutView();
  else if(page === 'contact') html = contactView();
  else if(page.indexOf('project-') === 0){
    const n = parseInt(page.split('-')[1], 10);
    html = projectView(PROJECTS[n-1]);
  }
  app.innerHTML = html;

  app.querySelectorAll('[data-link]').forEach(el=>{
    const url = routeToUrl(el.getAttribute('data-link'));
    el.style.cursor='pointer';
    el.addEventListener('click', ()=>{ location.href = url; });
  });
  app.querySelectorAll('[data-route]').forEach(el=>{
    const url = routeToUrl(el.getAttribute('data-route'));
    if(el.tagName==='A'){ el.setAttribute('href', url); }
    else { el.style.cursor='pointer'; el.addEventListener('click', ()=>{ location.href=url; }); }
  });

  initReveal();
}

function initNav(){
  document.querySelectorAll('.nav [data-route], .nav-logo[data-route]').forEach(a=>{
    a.setAttribute('href', routeToUrl(a.getAttribute('data-route')));
  });
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
  }
  const page = document.body.dataset.page || 'home';
  const activeRoute = page.indexOf('project-')===0 ? 'work' : page;
  document.querySelectorAll('.nav-links a[data-route]').forEach(a=>{
    if(a.getAttribute('data-route')===activeRoute) a.classList.add('active');
  });
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 80) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
  });
}

let io;
function initReveal(){
  if(io) io.disconnect();
  io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  },{threshold:0.12, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}

document.addEventListener('DOMContentLoaded', ()=>{
  initNav();
  renderPage();
  window.scrollTo(0,0);
});
