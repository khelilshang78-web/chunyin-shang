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
    subtitle: 'A lost wallet, Hobbes, Simmel, and the fear of becoming unreadable',
    year: '2026',
    category: 'Political Philosophy',
    tags: ['Identity', 'Technology', 'Belonging'],
    readingTime: 7,
    excerpt: 'Losing my documents did not put me outside the state. It made me realize how much I depended on the state being able to recognize me.',
    sections: [
      {
        heading: 'Was this Hobbes’s “state of nature”?',
        paragraphs: [
          `When I lost my wallet in Hong Kong, my identity card, passport, and bank cards were all inside. For a moment, I actually wondered whether I had fallen into Hobbes’s “state of nature.” The idea was dramatic enough to match my panic, but the more I thought about it, the more it seemed like a category mistake.`,
          `The state had not disappeared. If anything, it was everywhere: I could file an electronic police report, apply for replacement documents, and wait for the administrative process to fix what had gone wrong. My problem was not that common power had vanished. I had simply lost, for a while, my ability to call on it.`,
        ],
      },
      {
        heading: 'My anxiety was administrative, not natural',
        paragraphs: [
          `Hobbes’s state of nature has no common authority, no property or law, and no social bonds you can rely on. My life still had all of those things. The police were working, my family and teachers were still there, and the law still protected me. I was not surrounded by possible enemies. I was surrounded by systems that could not immediately confirm who I was.`,
          `That helped me understand my own fear. It was administrative anxiety, not a fear for my survival. I was not asking how society emerges from disorder. I wanted to know something more immediate: what happens to a person when an orderly society suddenly cannot read them?`,
        ],
      },
      {
        heading: 'A stranger the system could not read',
        paragraphs: [
          `Simmel’s “The Stranger” gave me a better way to think about it. His stranger is not just someone who arrives today and leaves tomorrow. The stranger is physically close but socially distant: part of the group’s life, yet never completely absorbed into it.`,
          `I was born in Hong Kong and have a Hong Kong identity card, but I grew up and now study in Hangzhou. Most of my everyday language, friendships, and routines belong to a mainland ecosystem. Losing my documents made that in-between position much harder to ignore. I was already a kind of stranger; now I was a stranger the system could not read.`,
          `A turnstile or a login screen does not meet a whole person with a history and an explanation. It gets a match or a mismatch. I was still standing there in person, but digitally I had become a failed query.`,
        ],
        quote: {
          text: 'The stranger is an element of the group itself… but his position is determined by the fact that he does not belong to it from the beginning.',
          attribution: 'Georg Simmel, “The Stranger”',
        },
      },
      {
        heading: 'I had a way back. Not everyone does.',
        paragraphs: [
          `My problem was temporary because institutions had a way to fix it for people like me. Once I realized that, it was hard not to think about the people whose exclusion does not end. Refugees, undocumented workers, and people failed by welfare or identity systems may be structurally unreadable, not just temporarily mismatched.`,
          `Losing my wallet did not make me an authority on exclusion. It gave me a small, reversible glimpse of a much bigger problem, and it made me notice a privilege I had not seen before: I had a way to become readable again.`,
        ],
      },
      {
        heading: 'The question I am still thinking about',
        paragraphs: [
          `At first, I thought about technical fixes: perhaps behavioural scoring, risk-based pricing, or predictive prevention could make administrative systems more efficient. But the more I thought about them, the less innocent they seemed. Each new patch could also give institutions more power to classify, predict, and correct people, while leaving those people with fewer ways to challenge what the system had decided about them.`,
          `I do not have a final answer, and I do not want to pretend that I do. I want to keep thinking about how institutions can be both efficient and humane: how they can repair errors without turning dignity into a privilege, and how people at the margins can remain visible as people rather than cases.`,
        ],
      },
    ],
  },
  {
    slug: 'the-words-we-fill-with-power',
    title: 'The Words We Fill With Power',
    subtitle: 'How looking up “fatherland” led me to ask who gets to speak for the general will',
    year: '2026',
    category: 'Political Philosophy',
    tags: ['Rousseau', 'Democracy', 'Language'],
    readingTime: 8,
    excerpt: 'I stopped at one word in a chapter about democracy: “fatherland.” Looking it up led me to a much bigger question: if the general will is always right, who gets to say what it is?',
    sourceUrl: 'https://mp.weixin.qq.com/s/-oPMi_PTK_IuWt-m4aSxLQ',
    sections: [
      {
        heading: 'The word that made me stop',
        paragraphs: [
          `I was reading Jonathan Wolff’s An Introduction to Political Philosophy late one evening when I reached the chapter “Who Should Rule?” In a passage from Rousseau, one word made me stop: “fatherland.” It wasn’t that I didn’t understand it. I just couldn’t see why it felt so wrong. In Chinese, I was used to thinking of my country as a mother. In modern English, “the Fatherland” also brings wartime Germany to mind. Then I saw the date: Rousseau, 1755. How could someone writing in 1755 use a word that sounded like 1939?`,
          `For a moment, I wondered whether I had found a prediction or a bizarre coincidence. The answer was neither. Rousseau had written patrie, a French word rooted in the Latin pater, meaning “father.” Translating it as “fatherland” made etymological sense. The wartime associations came later. The word still looked the same, but people had kept changing what it carried.`,
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
        heading: 'The sentence that bothered me more',
        paragraphs: [
          `As strange as “fatherland” seemed, it wasn’t what bothered me most. This was: children raised as citizens would learn “never to want anything but what the society wants.” I was reading a chapter about democracy. So why did it contain a sentence that sounded like a manual for totalitarianism?`,
          `The more I read, the harder it was to dismiss that sentence. Rousseau wasn’t only asking how to count people’s wishes. He was asking what kind of people could rule themselves. For him, citizens had to be able to ask what was good for the community, not just what they wanted as individuals. Civic education was how those citizens were formed. Before the people could rule, they first had to become a people.`,
        ],
      },
      {
        heading: 'What I want vs. what’s good for us',
        paragraphs: [
          `This is where Rousseau’s distinction between the will of all and the general will started to matter to me. The will of all adds up private interests: everyone asks, “What do I want?” The general will asks something different: “What is good for us as a political community?” Even a unanimous vote can express only the will of all if everyone is thinking about private advantage.`,
          `I could see why that distinction mattered. Democracy should be about more than getting what I happen to want. But the same idea opened a door I couldn’t ignore. If a vote can fail to express the general will, someone can claim to see the “real” general will better than the voters themselves—and correct them in its name.`,
        ],
        quote: {
          text: 'The general will is always right, but the judgment which guides it is not always enlightened.',
          attribution: 'Jean-Jacques Rousseau, The Social Contract',
        },
      },
      {
        heading: 'Who gets to fill in the general will?',
        paragraphs: [
          `Put three claims next to each other and the danger becomes hard to ignore: the general will is always right; the people can be deceived; and a particular vote may not express the real general will. That leaves a blank at the center of politics. Someone has to say what the general will actually is. But whoever claims to fill in that blank can speak in the name of the people—even against what the people have just voted for.`,
          `Later critics showed where that could lead. J. L. Talmon linked parts of Rousseau’s legacy to totalitarian democracy, and Isaiah Berlin examined how “forcing people to be free” could turn freedom into its opposite. Rousseau’s defenders answer that the general will is meant to restrain private domination and majority tyranny, not give a ruler permission to do whatever they want.`,
          `I don’t think calling Rousseau either a prophet of freedom or a source of tyranny settles the argument. The question I’m left with is harder: what institutions can stop any person or group from claiming the common good as theirs alone?`,
        ],
      },
      {
        heading: 'The blanks do not fill themselves',
        paragraphs: [
          `When I first saw “fatherland,” I thought I had found an eighteenth-century word predicting a twentieth-century disaster. Now I think I had the direction backwards. It wasn’t the word carrying history toward disaster. Each generation had been taking the language it inherited and filling it with new meanings.`,
          `“Fatherland,” “the people,” and “the general will” all carry history, but none has a single meaning that simply applies itself. Their political force depends on who interprets them, which institutions restrain that interpretation, and whether dissenters still count as part of the people. That was what I had missed at first: the blanks do not fill themselves. People fill them in. Words do not become dangerous all by themselves; people and institutions can make them dangerous.`,
        ],
      },
    ],
  },
  {
    slug: 'belief-is-not-a-truth-test',
    title: 'Belief Is Not a Truth Test',
    subtitle: 'What a sentence with no subject can reveal about existence and truth',
    year: '2026',
    category: 'Philosophy & Religion',
    tags: ['Belief', 'Truth', 'Hegel'],
    readingTime: 8,
    excerpt: '“It exists if you believe; it does not if you do not.” It sounds like a complete answer until I start asking: what is “it,” and whose belief are we talking about?',
    sourceUrl: 'https://mp.weixin.qq.com/s/rSsYOqv-nqYPG7KvoZjRBA',
    sections: [
      {
        heading: 'A temple, a memory, and a question',
        paragraphs: [
          `When I was little, my family took me to Lingyin Temple in Hangzhou. I followed them through the incense and chanting, copying gestures I did not understand. My grandmother bent down and told me, “If your heart is sincere, it will work.” At the time, that was enough of a reason for me to bow.`,
          `Years later, after watching a video about Hegel, I found myself thinking about that day again. Does “It exists if you believe; it does not if you do not” belong to religion, or is it already philosophy? I’m not sure it fits neatly into either one.`,
        ],
      },
      {
        heading: 'The same questions, asked in different forms',
        paragraphs: [
          `Hegel gives me one way into this question: religion and philosophy can have the same content but take different forms. Both ask why we exist, what life means, and how we should live. But asking the same questions does not mean they defend their answers in the same way.`,
          `Religious truth often arrives as something already given—through revelation, scripture, or inherited authority. Philosophical claims, on the other hand, are supposed to stay open to argument and objection. That distinction helps, but I don’t think it makes a clean wall. Many religious traditions make room for serious questioning, and some philosophies are ways of life too.`,
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
        heading: 'First, what is “it”?',
        paragraphs: [
          `The saying never tells us what “it” is. What exists when I believe, and what disappears when I don’t? It is less like a finished statement than a fill-in-the-blank question: “For X, if I believe, X exists; if I do not believe, X does not.” Before deciding whether it is religious or philosophical, I need to see what happens when I put different things in place of X.`,
          `If X is the comfort that prayer brings, the sentence can be true. That calm may depend on trusting the prayer. But if X is God, everything changes. A God whose existence depended on my belief would not be independent of me at all. That sounds more like a psychological effect than like God.`,
        ],
      },
      {
        heading: 'Putting different things into X',
        paragraphs: [
          `Try money. If I personally stop believing in a currency, my rent does not disappear. Money works because belief is shared and backed by institutions, not because any one person can decide whether it exists. Here the saying almost needs to become “If we believe, it exists.” Borders, diplomas, and sovereignty are similar: they depend on shared recognition and the practices that hold it in place.`,
          `Human rights are harder. Constructivists can say that rights exist because people recognize them and build institutions around them. Moral realists can answer that rights cannot simply vanish when people stop acknowledging them—otherwise, what would “universal” even mean? Once X changes, the saying leads me into a real philosophical disagreement instead of giving me an answer. That is why it feels more like a probe: it helps me ask whether I am talking about a psychological experience, a social construction, or a truth that does not depend on belief.`,
        ],
        quote: {
          text: 'Some things depend on our recognition; others stand whether we recognize them or not. The difficulty is deciding which kind of thing we are facing.',
          attribution: 'A working distinction from the essay',
        },
      },
      {
        heading: 'Leaving room for doubt—and for “as if”',
        paragraphs: [
          `One thing that makes me uneasy is when belief becomes the explanation for every failure. If something goes wrong and the answer is always “You did not believe enough,” no result can ever count against the claim. And if disagreement only proves that the critic lacks faith, the claim is not answering doubt. It is protecting itself from doubt. That is where the philosophical problem starts for me.`,
          `There is another possibility in the Confucian phrase “Sacrifice as if present; sacrifice to the spirits as if the spirits were present.” I like the small space opened by “as if.” It lets me remain unsure whether the spirits are present and still take the ritual seriously. I do not have to pretend to be certain in order to treat what I am doing with care.`,
          `So I don’t think the saying belongs completely to either religion or philosophy. Its value is that it makes me stop and ask: What kind of existence are we talking about? Whose belief matters? And can the claim ever be tested? I still don’t have a final answer for every case. But learning to tell the difference between what depends on our belief and what stands without it might be one of the most useful protections philosophy can offer.`,
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
