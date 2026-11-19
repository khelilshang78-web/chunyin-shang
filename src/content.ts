import { originalEssays, type OriginalEssay } from './originalEssays'

export type EssayImage = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
  layout?: 'portrait' | 'document'
}

export type EssaySection = {
  heading?: string
  paragraphs: string[]
  images?: EssayImage[]
  quote?: {
    text: string
    attribution: string
  }
}

export type Essay = {
  slug: string
  title: string
  subtitle: string
  year: string
  category: string
  tags: string[]
  readingTime: number
  excerpt: string
  kind?: 'essay' | 'research'
  sourceUrl?: string
  references?: { label: string; url: string }[]
  sections: EssaySection[]
  original?: OriginalEssay
}

export const profile = {
  name: 'ChunYin Shang',
  preferredName: 'Khelil',
  location: 'Hangzhou ↔ Hong Kong',
  email: 'khelilshang78@gmail.com',
  role: 'International high school student · Student Council President',
  school: 'Shanghai Foreign Language School Affiliated to SISU, Hangzhou',
  introduction: `I am an international high school student based between Hangzhou and Hong Kong. Living and studying across the two places has made me attentive to the ways institutions shape everyday life—from identity documents and public services to the subtle feeling of belonging. These observations led me toward Philosophy, Politics and Economics (PPE), Science, Technology and Society (STS), public policy, political science, and sociology.`,
  approach: `I learn by moving between books, field observation, and conversation. My current work brings together independent research, political-philosophy writing, and student leadership. I am especially interested in where public responsibility should begin and end, how technology can improve services without diminishing human dignity, and how communities make room for people who do not fit neat administrative categories.`,
  stats: [
    { value: '3.85 / 4.00', label: 'Weighted GPA' },
    { value: 'Top 10%', label: 'Academic ranking' },
    { value: '8.0', label: 'IELTS Reading' },
  ],
}

export const academicInterests = [
  {
    title: 'Politics & Philosophy',
    question: 'Who gets to define the common good—and what protects an individual when that definition goes wrong?',
    detail: 'Independent reading of Jonathan Wolff, alongside writing on Hobbes, Rousseau, Simmel, and the ethics of public authority.',
  },
  {
    title: 'Technology & Society',
    question: 'What happens when a person becomes difficult for an administrative or digital system to read?',
    detail: 'Exploring algorithmic governance, digital identity, and the social choices embedded in apparently technical systems.',
  },
  {
    title: 'Public Policy & Sociology',
    question: 'How do different institutions draw the boundary between collective provision and individual responsibility?',
    detail: 'Comparative research on public services in Hong Kong and mainland Chinese cities, combining observation with policy documents.',
  },
]

export const researchProjects = [
  {
    title: 'Public Toilet Policies: Hong Kong and Mainland China',
    meta: 'Independent research · 2026 · Working paper',
    summary: 'A comparative study of public-toilet provision and management, using field observation and policy-document analysis to investigate why hand dryers and paper provision differ across jurisdictions.',
    question: 'Why do similar everyday needs produce different ideas of what a public service ought to provide?',
    finding: 'The current working hypothesis contrasts a facility-and-engineering logic in Hong Kong with a service-and-livelihood logic in mainland Chinese cities. The project treats this as an argument to be tested, not a settled conclusion; hygiene, labour, environmental cost, and individual responsibility remain open dimensions.',
    articleSlug: 'public-toilet-policy-notes',
    tags: ['Policy analysis', 'Field observation', 'Comparative research'],
  },
  {
    title: 'Growing Up Between Hong Kong and the Mainland',
    meta: 'DOCUMENTARY PROJECT · IN PRODUCTION',
    summary: 'A fact-based documentary project about teenagers growing up between Hong Kong and mainland China. The project examines identity-document services, access to public education, and digital-payment platforms as everyday points of contact with public administration.',
    question: 'Can ordinary administrative encounters reveal something larger about identity and belonging?',
    finding: 'The first interview, lasting more than 40 minutes with a Form 6 student at a Band 1 secondary school in Hong Kong, has been completed. The first episode is currently being edited.',
    tags: ['Documentary', 'Identity', 'Public administration'],
  },
]

export const learningJourney = [
  {
    period: 'July 2026',
    title: 'HKU Summer Institute',
    subtitle: 'Citizens Beyond Borders: Global Diversity and Cultural Sensitivity',
    description: 'Led a six-person seminar research group examining how streaming platforms and algorithms monetize Black music culture; presented findings through the Drake–Kendrick Lamar conflict.',
  },
  {
    period: 'July–August 2026',
    title: 'Harvard Summit for Young Leaders in China',
    subtitle: 'HSYLC 2026',
    description: 'Studied globalization through social media, psychological and data-based approaches to mental health, and foundations of music theory and history.',
  },
  {
    period: '2026',
    title: 'Independent Reading & Writing',
    subtitle: 'Political philosophy',
    description: 'Read Jonathan Wolff’s An Introduction to Political Philosophy and developed essays on identity, governance, belief, and the general will.',
  },
  {
    period: 'July–August 2025',
    title: 'X-Academy: Business Artificial Intelligence',
    subtitle: 'Team Leader & Product Developer',
    description: 'Studied machine-learning fundamentals and AI-driven business models. Led a three-person team developing Risk-Pilot, a community-platform concept connecting young entrepreneurs; received the Best Business Investment Award.',
  },
  {
    period: 'June 2025',
    title: 'Hithink RoyalFlush Career Week',
    subtitle: 'Project Lead & Presenter',
    description: 'Explored AI applications in finance and economic analysis. Led the design and presentation of Okamont, an assistant concept for older financial-service users; the final presentation received Best Company and Best Creativity awards.',
  },
]

export const leadership = [
  {
    period: 'September 2025–Present',
    role: 'Student Council President',
    organization: 'SFLSHZ International Division',
    description: 'Coordinating a student leadership team, building a more reliable annual events calendar, and creating clearer routes for student concerns to reach school decision-makers.',
    contributions: [
      'Designed a 17-response student survey on electronic-device use during evening self-study and presented the findings to school leadership; the revised policy permitted device use in a designated self-study room.',
      'Organized and moderated an academic forum on “Green Economy in International Trade” for more than 200 attendees during the International Culture Festival.',
      'Planned and hosted a welcome ceremony, football exchanges, and cultural activities for visitors from Abbotsholme School, UK.',
      'Directed the Christmas Charity Bazaar, which raised and donated RMB 1,600 to UNICEF.',
    ],
  },
  {
    period: 'March–October 2025',
    role: 'Delegate & Bloc Leader',
    organization: 'Model United Nations',
    description: 'Built coalitions, negotiated working papers, and served as a liaison between competing blocs.',
    contributions: [
      'Global Youth Shanghai Diplomats Summit: Honourable Mention; represented Afghanistan in UNGAC3 and led a coalition of Central and East Asian nations.',
      'Yale MUN China: represented China in UNHCR and coordinated a bloc involving the P5 nations.',
      'Berkeley MUN China: Honourable Mention; represented Kenya in ECOSOC, led a bloc comprising one-third of the committee, and delivered the key working-paper presentation.',
    ],
  },
]

export const education = [
  {
    period: 'February 2025–Present',
    school: 'Shanghai Foreign Language School Affiliated to SISU, Hangzhou',
    credential: 'High School Diploma · Hangzhou, China',
    detail: 'Student Council President · Founder and Captain of the Badminton Team',
  },
  {
    period: 'September 2021–July 2024',
    school: 'Hangzhou GreenTown Yuhua Junior High School',
    credential: 'Junior High School Diploma · Hangzhou, China',
    detail: 'Student Council Organization Department · Photographer, GreenSounds Media',
  },
]

export const capabilities = [
  { label: 'Languages', items: ['Mandarin — first language', 'English — fluent; IELTS 6.5, Reading 8.0', 'Cantonese — basic daily conversation'] },
  { label: 'Research & Communication', items: ['Social-science research', 'Public speaking', 'Writing', 'Team coordination'] },
  { label: 'Creative Practice', items: ['Photography', 'Video editing', 'Social-media content', 'Creative writing'] },
  { label: 'Beyond the Classroom', items: ['Piano — Performance Level 8', 'Badminton', 'Singing', 'Bass'] },
]

const essayData: Essay[] = [
  {
    slug: 'physically-present-digitally-unreadable',
    title: 'Physically Present, Digitally Unreadable',
    subtitle: 'A lost wallet, Simmel’s stranger, and the ethics of administrative repair',
    year: '2026',
    category: 'Political Philosophy',
    tags: ['Identity', 'Technology', 'Belonging'],
    readingTime: 7,
    excerpt: 'Losing my documents did not place me outside the state. It revealed how completely I depended on the state’s ability to recognize me.',
    sections: [
      {
        heading: 'An unexpected thought experiment',
        paragraphs: [
          `When I lost my wallet in Hong Kong, it contained my identity card, passport, and bank cards. My first instinct was to ask whether I had entered Hobbes’s “state of nature.” The comparison felt dramatic enough to match my anxiety, but it quickly became clear that it was a category mistake.`,
          `The state was not absent. It was intensely present: I could file an electronic police report, apply for replacement documents, and wait for administrative procedures to restore what I had lost. My problem was not that common power had disappeared. It was that I had temporarily lost the means of calling upon it.`,
        ],
      },
      {
        heading: 'Administrative anxiety is not natural fear',
        paragraphs: [
          `Hobbes’s state of nature describes the absence of a common authority, property, law, and reliable social bonds. My situation contained the opposite conditions. The police still worked, my family and teachers remained present, and the law continued to protect me. I was not surrounded by potential enemies; I was surrounded by systems that could not immediately verify me.`,
          `That distinction changed the question. I was not asking how society emerges from disorder. I was asking what happens to a person when an orderly society cannot read them.`,
        ],
      },
      {
        heading: 'From the stranger to a failed query',
        paragraphs: [
          `Georg Simmel’s “The Stranger” offered a better starting point. The stranger is not simply a wanderer who arrives today and leaves tomorrow. The stranger is near in space but distant in social membership—inside the group, yet never fully absorbed by it.`,
          `I was born in Hong Kong and hold a Hong Kong identity card, but I grew up and study in Hangzhou. My language, friendships, and everyday routines belong largely to a mainland ecosystem. Losing my documents intensified that already ambiguous position. I became not only a stranger, but a temporarily unreadable one.`,
          `At a turnstile or a login screen, the system does not encounter a whole person with a history and an explanation. It encounters a match or a mismatch. Physically, I remained present; digitally, I had become a failed query.`,
        ],
        quote: {
          text: 'The stranger is an element of the group itself… but his position is determined by the fact that he does not belong to it from the beginning.',
          attribution: 'Georg Simmel, “The Stranger”',
        },
      },
      {
        heading: 'The privilege of being repairable',
        paragraphs: [
          `My disruption was temporary because institutions had a repair protocol for people like me. That realization carries an uncomfortable implication: not everyone’s exclusion is temporary. Refugees, undocumented workers, and people failed by welfare or identity systems may be structurally unreadable rather than momentarily mismatched.`,
          `My experience therefore did not make me an authority on exclusion. It gave me a small, reversible glimpse of a much larger problem—and revealed the privilege of being able to return to legibility.`,
        ],
      },
      {
        heading: 'The question I want to keep pursuing',
        paragraphs: [
          `My first responses were technocratic: perhaps behavioural scoring, risk-based pricing, or predictive prevention could make administrative systems more efficient. Further reflection made those solutions look less innocent. Each new patch could also give institutions more power to classify, predict, and correct people while leaving them fewer ways to contest the classification.`,
          `I do not claim to have a final answer. The question I want to pursue is how institutions can be both efficient and humane: how they can repair errors without turning dignity into a privilege, and how the people at the margins can remain visible as persons rather than cases.`,
        ],
      },
    ],
  },
  {
    slug: 'the-words-we-fill-with-power',
    title: 'The Words We Fill With Power',
    subtitle: 'Rousseau, the general will, and who gets to speak for the people',
    year: '2026',
    category: 'Political Philosophy',
    tags: ['Rousseau', 'Democracy', 'Language'],
    readingTime: 8,
    excerpt: 'A single translated word led me into a larger question: if the general will is always right, who has the authority to say what it is?',
    sourceUrl: 'https://mp.weixin.qq.com/s/-oPMi_PTK_IuWt-m4aSxLQ',
    sections: [
      {
        heading: 'A word in the margin',
        paragraphs: [
          `While reading the chapter “Who Should Rule?” in Jonathan Wolff’s An Introduction to Political Philosophy, I stopped at the word “fatherland” in a passage from Rousseau. In Chinese, I was used to speaking of the motherland; in modern English, “the Fatherland” also carries historical associations that Rousseau could not have intended in 1755.`,
          `The apparent anachronism was really a problem of translation and historical layering. Rousseau wrote patrie, a word rooted in the Latin pater. Later generations filled related political vocabulary with new meanings. The word’s shell survived; its emotional and political contents changed.`,
        ],
        images: [
          {
            src: './images/rousseau-portrait.jpg',
            alt: 'Portrait of Jean-Jacques Rousseau',
            caption: 'Jean-Jacques Rousseau (1712–1778)',
            width: 868,
            height: 777,
            layout: 'portrait',
          },
        ],
      },
      {
        heading: 'The more disturbing sentence',
        paragraphs: [
          `The passage’s deeper difficulty was not “fatherland.” It was the suggestion that children raised as citizens would learn “never to want anything but what the society wants.” A chapter about democracy suddenly seemed to contain a manual for manufacturing agreement.`,
          `For Rousseau, however, legitimate rule by the people requires more than counting private preferences. Citizens must be capable of asking what is good for the community, not merely what they individually want. Civic education is therefore not an ornamental addition to his politics; it helps create the people who are supposed to rule.`,
        ],
      },
      {
        heading: 'Will of all, general will',
        paragraphs: [
          `Rousseau distinguishes the will of all from the general will. The will of all aggregates private interests: everyone asks, “What do I want?” The general will points toward the common good: “What is good for us as a political community?” A unanimous vote can still express the will of all if every voter is pursuing only private advantage.`,
          `This distinction gives democracy a demanding moral purpose. It also creates an opening for abuse. If a vote can fail to express the general will, someone may claim the authority to correct the vote in the name of a truth that only they can see.`,
        ],
        quote: {
          text: 'The general will is always right, but the judgment which guides it is not always enlightened.',
          attribution: 'Jean-Jacques Rousseau, The Social Contract',
        },
      },
      {
        heading: 'The blank that invites power',
        paragraphs: [
          `The danger appears when three claims are placed together: the general will is right; the people can be deceived; and the current vote may not express the real general will. Politics then contains a powerful blank space—someone must say who has correctly interpreted the people.`,
          `Later critics saw how easily that space could be filled by coercive authority. J. L. Talmon connected aspects of Rousseau’s legacy to totalitarian democracy, while Isaiah Berlin examined how the language of forcing people to be free could turn autonomy into its opposite. Defenders respond that the general will is meant to restrain private domination and majority tyranny, not license a ruler’s whim.`,
          `The argument cannot be closed by calling Rousseau either a prophet of freedom or a source of tyranny. The harder task is to ask what institutions could prevent any person or group from monopolizing the meaning of the common good.`,
        ],
      },
      {
        heading: 'Words do not walk by themselves',
        paragraphs: [
          `I began by thinking that an eighteenth-century word had somehow predicted twentieth-century disaster. The direction of influence was less mysterious and more troubling: each generation reinterprets the language it inherits.`,
          `“Fatherland,” “the people,” and “the general will” are not empty of history, but neither do they possess a single, self-executing meaning. Their political force depends on who interprets them, which institutions restrain that interpretation, and whether dissenters remain part of the people. Words do not move toward domination by themselves; people and institutions carry them there.`,
        ],
      },
    ],
  },
  {
    slug: 'belief-is-not-a-truth-test',
    title: 'Belief Is Not a Truth Test',
    subtitle: 'Religion, philosophy, and the missing subject of a familiar saying',
    year: '2026',
    category: 'Philosophy & Religion',
    tags: ['Belief', 'Truth', 'Hegel'],
    readingTime: 8,
    excerpt: '“It exists if you believe; it does not if you do not.” The saying sounds complete until I ask what, exactly, is supposed to exist.',
    sourceUrl: 'https://mp.weixin.qq.com/s/rSsYOqv-nqYPG7KvoZjRBA',
    sections: [
      {
        heading: 'A temple and a familiar sentence',
        paragraphs: [
          `As a child visiting Lingyin Temple in Hangzhou, I followed my family through incense, chanting, and ritual gestures whose meanings I did not yet understand. My grandmother explained the practice with a simple phrase: sincerity makes it efficacious.`,
          `Years later, after encountering Hegel’s account of religion and philosophy, I returned to that memory with a new question. Does “It exists if you believe; it does not if you do not” belong to religion, or is it already a philosophical claim?`,
        ],
      },
      {
        heading: 'Same questions, different disciplines',
        paragraphs: [
          `Hegel’s suggestion that religion and philosophy can share content while differing in form offers one way to relate them. Religious traditions and philosophical inquiry both address existence, meaning, finitude, and how a person ought to live. But sharing questions does not erase differences in how claims are justified.`,
          `Religious truth is often grounded in revelation, scripture, or inherited authority. Philosophical truth claims are expected to remain open to argument and objection. Many religious traditions also contain profound practices of questioning, just as some philosophies function as ways of life. The boundary is therefore real but not mechanically absolute.`,
        ],
        images: [
          {
            src: './images/hegel-portrait.jpg',
            alt: 'Portrait of Georg Wilhelm Friedrich Hegel',
            caption: 'Georg Wilhelm Friedrich Hegel (1770–1831)',
            width: 1024,
            height: 1134,
            layout: 'portrait',
          },
        ],
      },
      {
        heading: 'The missing subject',
        paragraphs: [
          `The saying itself does not identify what exists or disappears through belief. It has the form “For X, if I believe, X exists; if I do not believe, X does not.” Before classifying the sentence, I have to test what happens when different subjects fill that blank.`,
          `If X is the comfort produced by prayer, the saying may describe something real: reassurance can depend on the believer’s trust. If X is God, the argument changes completely; a divine being whose existence depended on individual belief would be a very different kind of object.`,
        ],
      },
      {
        heading: 'A probe for different kinds of reality',
        paragraphs: [
          `Money makes the distinction sharper. One person’s refusal to believe in a currency does not cancel a rent payment. Money works because belief is collective and institutional, not because an individual can choose whether it exists. Borders, diplomas, and sovereignty similarly depend on shared recognition backed by practices and institutions.`,
          `Human rights expose a philosophical disagreement. Constructivists can emphasize recognition and institutions; moral realists can insist that rights do not disappear when people stop acknowledging them. The same sentence therefore becomes a probe: it helps reveal whether we are discussing psychological experience, social construction, or a truth claim independent of belief.`,
        ],
        quote: {
          text: 'Some things depend on our recognition; others stand whether we recognize them or not. The difficulty is deciding which kind of thing we are facing.',
          attribution: 'A working distinction from the essay',
        },
      },
      {
        heading: 'Leaving room for doubt',
        paragraphs: [
          `A claim becomes philosophically weaker when every failure is explained by insufficient belief. If disagreement is always evidence that the critic lacks faith, the claim has protected itself from examination rather than answered the criticism.`,
          `The Confucian phrase “Sacrifice as if present; sacrifice to the spirits as if the spirits were present” suggests another possibility. The word “as if” preserves both seriousness and uncertainty. One need not pretend to possess certainty in order to treat a ritual with care.`,
          `The saying belongs neither wholly to religion nor wholly to philosophy. Its value is diagnostic: it forces me to ask what kind of existence is at stake, whose belief matters, and whether the claim permits itself to be tested. Making those distinctions may be one of philosophy’s most practical forms of protection.`,
        ],
      },
    ],
  },
  {
    slug: 'public-toilet-policy-notes',
    title: 'When a Public Toilet Becomes a Policy Question',
    subtitle: 'Hand dryers, free paper, and the boundary between public provision and individual responsibility',
    year: '2026',
    category: 'Research Note',
    tags: ['Public Policy', 'Field Observation', 'Comparative Research'],
    readingTime: 6,
    excerpt: 'Selected notes from a comparative study of public-toilet provision in Hong Kong and mainland China, with original policy evidence and unresolved questions.',
    kind: 'research',
    references: [
      { label: 'Hong Kong public-toilet standards', url: 'https://www.legco.gov.hk/yr19-20/chinese/pac/reports/73/app_14.pdf' },
      { label: 'Legislative Council Report No. 73', url: 'https://www.legco.gov.hk/yr19-20/english/pac/reports/73/m_9a.pdf' },
    ],
    sections: [
      {
        heading: 'From an ordinary observation to a research question',
        paragraphs: [
          `This project began with a small observation rather than a settled claim. At Hong Kong public toilets I visited, including one at Southorn Playground, electric hand dryers were prominent. At mainland public toilets I visited, including one in Xixi Subdistrict, paper was more visible even when a dryer was also installed.`,
          `Those encounters are not a representative sample, so they cannot by themselves establish a jurisdictional difference. They did, however, produce a useful question: why might similar everyday needs lead institutions to provide different combinations of equipment, consumables, and services?`,
        ],
      },
      {
        heading: 'What the official standards establish',
        paragraphs: [
          `The Hong Kong handbook makes electric hand dryers a standard fitting in communal areas and recommends sensor-controlled operation near wash basins. The same standards distinguish toilet-paper holders inside individual compartments from jumbo-roll holders in communal areas, stating that the latter should not be installed.`,
          `These clauses establish a documented design choice. They do not, on their own, explain why that choice was made. The next step is to test possible explanations against cost, labour, environmental policy, institutional purpose, and international benchmarking.`,
        ],
        images: [
          {
            src: './images/research-hk-hand-dryer.png',
            alt: 'Excerpt from Hong Kong public-toilet standards specifying electric hand dryers in communal areas',
            caption: 'Original research excerpt · Hong Kong standard features for public toilets, electric hand dryers',
            width: 592,
            height: 402,
            layout: 'document',
          },
          {
            src: './images/research-hk-paper-holder.png',
            alt: 'Excerpt stating that jumbo-roll paper holders should not be installed in communal areas',
            caption: 'Original research excerpt · Jumbo-roll paper holders in communal areas',
            width: 809,
            height: 121,
            layout: 'document',
          },
        ],
      },
      {
        heading: 'Five hypotheses, tested rather than assumed',
        paragraphs: [
          `Raw-material scarcity was the first hypothesis, but it is not a sufficient explanation. Paper is traded globally, and Hong Kong public toilets already procure toilet paper. The absence of paper hand towels therefore cannot simply be inferred from the cost of local papermaking.`,
          `Operating cost remains relevant, but the important cost may be labour rather than electricity alone. Paper requires replenishment, transportation, storage, and waste removal; a dryer replaces some recurring inputs with a capital installation. This is a plausible mechanism to investigate, not yet a quantified conclusion.`,
          `Environmental policy also requires a chronological test. Hong Kong’s Public Toilet Refurbishment Programme had operated annually since 2000, while the Waste Blueprint for Hong Kong 2035 was announced in 2021. Dryer installation therefore cannot simply be attributed to the later waste-reduction agenda, even if it subsequently fitted that discourse.`,
          `A fourth hypothesis concerns institutional scope. A configuration built around basin, soap, and dryer defines a closed sequence of hand-washing. Needs beyond that sequence, such as wiping one’s face, are left to the user. By contrast, free-paper provision can express a broader promise of public service, while also creating a waste-management problem.`,
          `Finally, international benchmarking has direct documentary support: Hong Kong studied European auto-cleansing toilets and Singapore’s Smart Toilet System. That helps explain where technical routes came from, but not why two jurisdictions diverged, because mainland cities also adopt international models.`,
        ],
      },
      {
        heading: 'A working interpretation, not a final answer',
        paragraphs: [
          `The current working hypothesis contrasts a facility-and-engineering logic in Hong Kong with a service-and-livelihood logic in the mainland cases studied. In the former, a core function is guaranteed through infrastructure and some derivative needs become the user’s responsibility. In the latter, free paper can serve as visible evidence that a public service is adequately provided, with technology and management then used to limit waste.`,
          `This interpretation is a comparison of institutional tendencies, not a claim that every toilet in either place works the same way. Nor does it establish which model is superior. It identifies a boundary that now needs broader evidence and clearer measures.`,
        ],
      },
      {
        heading: 'What remains open',
        paragraphs: [
          `A serious comparison would need to add government expenditure, procurement, replenishment labour, individual spending on pocket tissues, waste, and environmental cost. Hygiene evidence must also be considered independently: an option that costs less or produces less waste is not automatically the option with the better public-health outcome.`,
          `The larger question is therefore not simply “dryer or paper?” It is where the boundary between collective provision and individual responsibility should lie, which costs each arrangement makes visible, and which costs it transfers elsewhere. That is the question this working note will continue to test.`,
        ],
      },
    ],
  },
]

export const essays: Essay[] = essayData.map((essay) => ({
  ...essay,
  original: originalEssays[essay.slug],
}))
