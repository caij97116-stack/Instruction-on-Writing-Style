// ========== 作家文风数据库 ==========
const authors = [
  // ========== 中国作家 ==========
  {
    id: 'luxun',
    name: '鲁迅',
    nameEn: 'Lu Xun',
    region: '中国',
    era: '现代',
    style: '冷峻犀利、讽刺深刻、文言白话交融',
    characteristics: '冷峻尖刻的反讽语气、文言与白话杂糅的独特语感、短句为主节奏明快、善用比喻和象征、白描手法刻画人物入木三分、思想深度与文学性高度统一',
    example: '我翻开历史一查，这历史没有年代，歪歪斜斜的每叶上都写着"仁义道德"几个字。我横竖睡不着，仔细看了半夜，才从字缝里看出字来，满本都写着两个字是"吃人"！',
    exampleSource: '《狂人日记》',
    avoid: '避免空洞抒情、避免无批判的赞美、避免拖泥带水的长句'
  },
  {
    id: 'shencongwen',
    name: '沈从文',
    nameEn: 'Shen Congwen',
    region: '中国',
    era: '现代',
    style: '清新自然、乡土抒情、诗意散文化',
    characteristics: '清澈如溪水的语言质感、浓郁的湘西乡土气息、散文化叙事淡化情节冲突、对自然景物和人性美的细腻描摹、温柔敦厚中蕴含淡淡哀愁、用词质朴却意境深远',
    example: '我行过许多地方的桥，看过许多次数的云，喝过许多种类的酒，却只爱过一个正当最好年龄的人。',
    exampleSource: '《从文家书》',
    avoid: '避免华丽辞藻堆砌、避免激烈冲突渲染、避免都市化的浮躁表达'
  },
  {
    id: 'zhangailing',
    name: '张爱玲',
    nameEn: 'Eileen Chang',
    region: '中国',
    era: '现代',
    style: '华丽苍凉、细腻刻薄、参差对照',
    characteristics: '华丽而苍凉的比喻系统、对人性弱点的冷静乃至刻薄的洞察、精妙的细节描写营造氛围感、善用色彩和气味渲染情绪、在繁华中见荒凉的反讽笔法、都市男女情感博弈的精准拿捏',
    example: '也许每一个男子全都有过这样的两个女人，至少两个。娶了红玫瑰，久而久之，红的变了墙上的一抹蚊子血，白的还是"床前明月光"；娶了白玫瑰，白的便是衣服上沾的一粒饭黏子，红的却是心口上一颗朱砂痣。',
    exampleSource: '《红玫瑰与白玫瑰》',
    avoid: '避免热血沸腾的赞美、避免圆满结局的温情、避免直白粗放的语言'
  },
  {
    id: 'qianzhongshu',
    name: '钱钟书',
    nameEn: 'Qian Zhongshu',
    region: '中国',
    era: '现代',
    style: '机智幽默、学识渊博、比喻奇绝',
    characteristics: '令人拍案叫绝的比喻联翩而至、学贯中西的典故信手拈来、机智幽默中暗藏犀利讽刺、对知识分子群体的精准描摹与调侃、语言密度极高、句句珠玑',
    example: '流言这东西，比流感蔓延的速度更快，比流星所蕴含的能量更巨大，比流氓更具有恶意，比流产更能让人心力憔悴。',
    exampleSource: '《围城》',
    avoid: '避免平铺直叙、避免陈词滥调、避免缺乏智识含量的表达'
  },
  {
    id: 'wangxiaobo',
    name: '王小波',
    nameEn: 'Wang Xiaobo',
    region: '中国',
    era: '当代',
    style: '黑色幽默、自由不羁、理性与荒诞交织',
    characteristics: '黑色幽默与荒诞笔法、理性思辨与天马行空并存、口语化叙述中蕴含哲学深度、对自由的执着追求贯穿始终、反讽和解构一切权威的姿态、看似轻松实则沉重',
    example: '那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程。',
    exampleSource: '《黄金时代》',
    avoid: '避免说教口吻、避免故作深沉、避免缺乏幽默感的严肃'
  },
  {
    id: 'moyan',
    name: '莫言',
    nameEn: 'Mo Yan',
    region: '中国',
    era: '当代',
    style: '魔幻现实主义、感官轰炸、高密东北乡',
    characteristics: '感官描写极其丰富、视觉听觉嗅觉味觉触觉全方位轰炸、魔幻与现实无缝交融、乡土叙事中融入宏大历史、语言粗粝而有生命力、夸张与变形手法大胆',
    example: '我爷爷是个土匪，我奶奶是个大家闺秀。他们俩在高粱地里野合，生下了我爹。我爹是个土匪，我娘是个大家闺秀。他们俩在高粱地里野合，生下了我。',
    exampleSource: '《红高粱家族》',
    avoid: '避免文雅含蓄、避免线性叙事、避免温和克制的表达'
  },
  {
    id: 'yuhua',
    name: '余华',
    nameEn: 'Yu Hua',
    region: '中国',
    era: '当代',
    style: '冷静克制、暴力与温情并存、白描式叙事',
    characteristics: '极度冷静的叙述语调讲述残酷故事、白描手法不渲染不煽情、短句和重复句型的节奏控制、用最朴素的语言写最沉重的命运、细节中见人性的坚韧与温情、零度叙事的冷峻力量',
    example: '我看着那条弯曲着通向城里的小路，听不到我儿子赤脚跑来的声音。月光照在路上，像是撒满了盐。',
    exampleSource: '《活着》',
    avoid: '避免煽情夸张、避免华丽修辞、避免作者介入评判'
  },
  {
    id: 'jinyong',
    name: '金庸',
    nameEn: 'Jin Yong',
    region: '中国',
    era: '当代',
    style: '文史交融、侠义情怀、章回体叙事',
    characteristics: '古典章回体与现代小说技法融合、文史典故信手拈来、武功描写极具画面感和想象力、人物塑造丰满立体正邪难分、宏大叙事中兼顾儿女情长、语言典雅而不失流畅',
    example: '你瞧这些白云聚了又散，散了又聚，人生离合，亦复如斯。',
    exampleSource: '《神雕侠侣》',
    avoid: '避免现代网络用语、避免扁平化人物塑造、避免缺乏文化底蕴的直白'
  },
  {
    id: 'gulong',
    name: '古龙',
    nameEn: 'Gu Long',
    region: '中国',
    era: '当代',
    style: '诗化语言、意境深远、警句迭出',
    characteristics: '短句分行如诗的节奏感、大量留白和意境渲染、哲理警句信手拈来、悬疑氛围营造出众、人物对话简洁而富有深意、武侠外壳下的人性探索',
    example: '天涯远不远？不远！人就在天涯，天涯怎么会远？',
    exampleSource: '《天涯·明月·刀》',
    avoid: '避免冗长描述、避免传统打斗描写、避免直白说理'
  },
  {
    id: 'wangzengqi',
    name: '汪曾祺',
    nameEn: 'Wang Zengqi',
    region: '中国',
    era: '当代',
    style: '平淡有味、烟火气息、生活美学',
    characteristics: '平淡中见真味的语言功底、对日常生活细节的深情凝视、饮食风物描写极富感染力、散文化小说淡化情节冲突、平和冲淡中蕴含人生智慧、语言干净如水却有回甘',
    example: '西瓜以绳络悬之井中，下午剖食，一刀下去，喀嚓有声，凉气四溢，连眼睛都是凉的。',
    exampleSource: '《夏天》',
    avoid: '避免激烈冲突、避免华丽辞藻、避免宏大叙事'
  },
  {
    id: 'laoshe',
    name: '老舍',
    nameEn: 'Lao She',
    region: '中国',
    era: '现代',
    style: '京味幽默、市民视角、口语化叙事',
    characteristics: '地道北京方言的醇厚韵味、幽默中带着对底层人民的深切同情、口语化叙事如街坊唠嗑、人物对话高度个性化、对市井生活的细腻描摹、悲喜交织中见人生百态',
    example: '雨下给富人，也下给穷人；下给义人，也下给不义的人。其实，雨并不公道，因为落在一个没有公道的世界上。',
    exampleSource: '《骆驼祥子》',
    avoid: '避免书面语腔调、避免精英视角、避免脱离市井生活'
  },
  {
    id: 'sanmao',
    name: '三毛',
    nameEn: 'San Mao',
    region: '中国',
    era: '当代',
    style: '流浪浪漫、真情流露、异域风情',
    characteristics: '第一人称真诚倾诉的叙事姿态、流浪与远方的情怀贯穿始终、异域风情的生动描摹、情感表达坦率而浓烈、日记体式的亲切感、简单文字中蕴含强烈感染力',
    example: '每想你一次，天上飘落一粒沙，从此形成了撒哈拉。',
    exampleSource: '《撒哈拉的故事》',
    avoid: '避免冷漠克制、避免复杂修辞、避免掩盖真实情感'
  },
  {
    id: 'linyutang',
    name: '林语堂',
    nameEn: 'Lin Yutang',
    region: '中国',
    era: '现代',
    style: '幽默闲适、中西贯通、性灵小品',
    characteristics: '幽默而不刻薄的绅士风度、学贯中西的从容笔调、闲适小品文的散淡韵味、对生活智慧的洞见随手拈来、以英语向西方介绍中国文化的跨文化视角、举重若轻的大家风范',
    example: '人生不过如此，且行且珍惜。自己永远是自己的主角，不要总在别人的戏剧里充当着配角。',
    exampleSource: '《人生不过如此》',
    avoid: '避免偏激极端、避免学究气、避免缺乏幽默感的说教'
  },

  // ========== 国际作家 ==========
  {
    id: 'hemingway',
    name: '海明威',
    nameEn: 'Ernest Hemingway',
    region: '国际',
    era: '20世纪',
    style: '冰山理论、简洁有力、电报式文体',
    characteristics: '极简主义写作典范、大量使用短句和简单词汇、对话简洁而蕴含深意、"冰山理论"——只写八分之一、名词和动词为主、少用形容词和副词、硬汉美学贯穿始终',
    example: 'But man is not made for defeat. A man can be destroyed but not defeated.',
    exampleSource: '《老人与海》',
    avoid: '避免冗长修饰、避免华丽辞藻、避免心理描写过多'
  },
  {
    id: 'kafka',
    name: '卡夫卡',
    nameEn: 'Franz Kafka',
    region: '国际',
    era: '20世纪',
    style: '荒诞压抑、精确冷静、迷宫叙事',
    characteristics: '用极其冷静精确的语言描述荒诞情境、主人公在不可理解的体制中挣扎、梦境般的叙事逻辑、细节的真实感与整体的荒诞感形成张力、存在主义式的孤独与异化、开放式结局和不确定性',
    example: 'Someone must have been telling lies about Josef K., for without having done anything wrong he was arrested one fine morning.',
    exampleSource: '《审判》',
    avoid: '避免合理解释、避免圆满结局、避免情感宣泄'
  },
  {
    id: 'murakami',
    name: '村上春树',
    nameEn: 'Haruki Murakami',
    region: '国际',
    era: '当代',
    style: '孤独疏离、超现实、都市感伤',
    characteristics: '第一人称都市孤独者的叙事视角、日常与超现实的无缝切换、大量音乐/食物/品牌等流行文化符号、简洁流畅的翻译体日语风格、淡淡的感伤和疏离感贯穿始终、对"另一个世界"的反复书写',
    example: '并不是一切都消失在了时间的长河里。那时，我们坚定地相信某种东西，拥有能坚定地相信某种东西的自我。这样的信念绝不会毫无意义地烟消云散。',
    exampleSource: '《1Q84》',
    avoid: '避免热烈奔放、避免社会批判、避免传统叙事结构'
  },
  {
    id: 'marquez',
    name: '马尔克斯',
    nameEn: 'Gabriel García Márquez',
    region: '国际',
    era: '20世纪',
    style: '魔幻现实主义、史诗叙事、时间循环',
    characteristics: '魔幻与现实无缝交融的叙事魔力、循环往复的时间结构、史诗般的家族叙事跨越百年、感官细节极其丰富如热带雨林、不动声色地讲述最离奇的事件、拉美大陆的历史与神话交织',
    example: 'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.',
    exampleSource: '《百年孤独》',
    avoid: '避免线性时间叙事、避免克制含蓄、避免缺乏想象力的写实'
  },
  {
    id: 'nabokov',
    name: '纳博科夫',
    nameEn: 'Vladimir Nabokov',
    region: '国际',
    era: '20世纪',
    style: '精雕细琢、文字游戏、唯美主义',
    characteristics: '对语言本身的极致雕琢和热爱、大量的文字游戏和双关语、叙述者不可靠的叙事策略、唯美主义的审美追求超越道德判断、跨语言的写作能力和词汇创造力、智力游戏般的阅读体验',
    example: 'Lolita, light of my life, fire of my loins. My sin, my soul. Lo-lee-ta: the tip of the tongue taking a trip of three steps down the palate to tap, at three, on the teeth.',
    exampleSource: '《洛丽塔》',
    avoid: '避免道德说教、避免朴素直白、避免功能性的语言'
  },
  {
    id: 'orwell',
    name: '乔治·奥威尔',
    nameEn: 'George Orwell',
    region: '国际',
    era: '20世纪',
    style: '政治寓言、清晰有力、反乌托邦',
    characteristics: '水晶般清晰的表达风格、政治讽喻与寓言式写作、用最朴素的语言揭示最深刻的真相、反极权主义的核心主题、以具体细节代替抽象概念、冷静克制的叙述中蕴含道德力量',
    example: 'If you want a picture of the future, imagine a boot stamping on a human face — forever.',
    exampleSource: '《1984》',
    avoid: '避免模糊抽象、避免华丽空泛、避免缺乏立场的中立'
  },
  {
    id: 'woolf',
    name: '弗吉尼亚·伍尔夫',
    nameEn: 'Virginia Woolf',
    region: '国际',
    era: '20世纪',
    style: '意识流、诗意内省、感官印象',
    characteristics: '意识流手法的开创性运用、内心独白如潮水般涌动、外部世界通过感官印象折射呈现、时间在主观意识中自由流动、诗化的语言节奏和意象、对女性经验与身份的深刻探索',
    example: 'Mrs Dalloway said she would buy the flowers herself.',
    exampleSource: '《达洛维夫人》',
    avoid: '避免线性叙事、避免外部行动主导、避免传统心理描写'
  },
  {
    id: 'fitzgerald',
    name: '菲茨杰拉德',
    nameEn: 'F. Scott Fitzgerald',
    region: '国际',
    era: '20世纪',
    style: '华丽抒情、爵士时代、梦幻与幻灭',
    characteristics: '华丽的抒情风格如香槟般璀璨、对爵士时代的精准捕捉、美国梦的追逐与幻灭主题、精妙的比喻和意象系统、浪漫与感伤交织的笔调、对财富与阶级的敏锐洞察',
    example: 'So we beat on, boats against the current, borne back ceaselessly into the past.',
    exampleSource: '《了不起的盖茨比》',
    avoid: '避免粗粝写实、避免冷静克制、避免底层视角'
  },
  {
    id: 'dostoevsky',
    name: '陀思妥耶夫斯基',
    nameEn: 'Fyodor Dostoevsky',
    region: '国际',
    era: '19世纪',
    style: '心理深度、灵魂拷问、复调叙事',
    characteristics: '对人性最深处的勘探与拷问、复调小说中多种声音平等对话、人物在极端情境下的精神挣扎、哲学思辨与戏剧性情节交织、宗教与道德困境的反复追问、狂热而密集的心理描写',
    example: 'The mystery of human existence lies not in just staying alive, but in finding something to live for.',
    exampleSource: '《卡拉马佐夫兄弟》',
    avoid: '避免轻松愉快、避免简单善恶、避免回避终极问题'
  },
  {
    id: 'camus',
    name: '加缪',
    nameEn: 'Albert Camus',
    region: '国际',
    era: '20世纪',
    style: '简洁冷峻、存在主义、地中海阳光',
    characteristics: '简洁冷峻而又富有诗意的语言、存在主义哲学与文学高度融合、对荒诞的清醒认知与反抗、地中海阳光与死亡阴影的对照、第一人称的疏离叙事者、短句节奏如心跳般有力',
    example: 'Aujourd\'hui, maman est morte. Ou peut-être hier, je ne sais pas.',
    exampleSource: '《局外人》',
    avoid: '避免情感泛滥、避免道德评判、避免冗长解释'
  },
  {
    id: 'tolstoy',
    name: '托尔斯泰',
    nameEn: 'Leo Tolstoy',
    region: '国际',
    era: '19世纪',
    style: '史诗格局、心理洞察、道德探索',
    characteristics: '百科全书式的宏大叙事格局、对人物心理极其细腻的洞察、历史洪流中个人命运的书写、道德与精神探索贯穿始终、细节的真实感令人身临其境、朴素而有力的语言风格',
    example: 'All happy families are alike; each unhappy family is unhappy in its own way.',
    exampleSource: '《安娜·卡列尼娜》',
    avoid: '避免浮夸渲染、避免片面视角、避免回避道德追问'
  },
  {
    id: 'borges',
    name: '博尔赫斯',
    nameEn: 'Jorge Luis Borges',
    region: '国际',
    era: '20世纪',
    style: '迷宫哲思、元小说、时间与无限',
    characteristics: '迷宫般的叙事结构蕴含哲学思辨、图书馆/镜子/迷宫等核心意象反复出现、元小说技法打破虚实界限、时间循环与平行宇宙的反复书写、精简到极致的散文风格、博学而克制的智性写作',
    example: 'I have always imagined that Paradise will be a kind of library.',
    exampleSource: '《巴别图书馆》',
    avoid: '避免情感泛滥、避免冗长描述、避免线性叙事'
  },
  {
    id: 'calvino',
    name: '卡尔维诺',
    nameEn: 'Italo Calvino',
    region: '国际',
    era: '20世纪',
    style: '轻盈奇幻、结构游戏、寓言叙事',
    characteristics: '追求"轻逸"的写作美学、想象力天马行空而结构精巧、童话与寓言式的叙事框架、对城市、阅读、宇宙等主题的独特书写、以游戏般的姿态探索严肃命题、精炼优雅的语言',
    example: 'You are about to begin reading Italo Calvino\'s new novel, If on a winter\'s night a traveler.',
    exampleSource: '《如果在冬夜，一个旅人》',
    avoid: '避免沉重冗长、避免写实主义、避免传统叙事结构'
  },
  {
    id: 'duras',
    name: '玛格丽特·杜拉斯',
    nameEn: 'Marguerite Duras',
    region: '国际',
    era: '20世纪',
    style: '破碎重复、情感张力、简洁白描',
    characteristics: '破碎而重复的句子营造独特节奏、极简白描中蕴含巨大情感张力、对话与沉默之间的张力把控、第一人称的私密叙述语调、对爱情与欲望的极致书写、电影化的场景切换',
    example: 'Un jour, j\'étais âgée déjà, dans le hall d\'un lieu public, un homme est venu vers moi.',
    exampleSource: '《情人》',
    avoid: '避免复杂结构、避免华丽修辞、避免情感直白'
  },
  {
    id: 'austen',
    name: '简·奥斯汀',
    nameEn: 'Jane Austen',
    region: '国际',
    era: '19世纪',
    style: '反讽机智、婚恋观察、社会喜剧',
    characteristics: '自由间接引语的精妙运用、对婚恋与阶级的敏锐观察、反讽语调贯穿始终而不刻薄、限定场景中的微缩社会画卷、对话中展现人物性格的功力深厚、幽默与智慧并存',
    example: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    exampleSource: '《傲慢与偏见》',
    avoid: '避免宏大叙事、避免煽情夸张、避免脱离日常'
  },
  {
    id: 'ishiguro',
    name: '石黑一雄',
    nameEn: 'Kazuo Ishiguro',
    region: '国际',
    era: '当代',
    style: '克制隐忍、记忆叙事、不可靠叙述',
    characteristics: '极度克制的情感表达方式、记忆的不可靠性贯穿叙事、日常表面下暗流涌动的悲剧感、第一人称叙述者往往在自我欺骗、英式含蓄与日式物哀的融合、缓慢揭示真相的悬疑节奏',
    example: 'It seems increasingly likely that I really will undertake the expedition that has been preoccupying my imagination now for some days.',
    exampleSource: '《长日将尽》',
    avoid: '避免情感直白、避免快节奏叙事、避免全知视角'
  },

  // ========== 日本作家 ==========
  {
    id: 'kawabata',
    name: '川端康成',
    nameEn: 'Yasunari Kawabata',
    region: '日本',
    era: '20世纪',
    style: '物哀美学、纤细敏锐、余情留白',
    characteristics: '物哀美学的极致体现、对自然景物与季节变换的敏锐感知、留白与暗示多于直白叙述、语言如俳句般凝练清雅、在极简笔墨中蕴含深厚情感、死亡与美的一体两面',
    example: '穿过县界长长的隧道，便是雪国。夜空下一片白茫茫。',
    exampleSource: '《雪国》',
    avoid: '避免冗长解释、避免直白抒情、避免喧闹华丽的表达'
  },
  {
    id: 'mishima',
    name: '三岛由纪夫',
    nameEn: 'Yukio Mishima',
    region: '日本',
    era: '20世纪',
    style: '唯美暴烈、肉体与精神、古典与现代',
    characteristics: '将美与毁灭推向极致的审美追求、肉体之美与精神之美的二元对立、古典日语与现代心理描写的融合、精雕细琢如建筑般的叙事结构、对死亡与存在的执着追问、华丽辞藻下暗藏虚无主义',
    example: '金阁的美，必须用烧毁它的火来证明。',
    exampleSource: '《金阁寺》',
    avoid: '避免平庸温和、避免回避极端、避免朴素直白'
  },
  {
    id: 'dazai',
    name: '太宰治',
    nameEn: 'Osamu Dazai',
    region: '日本',
    era: '20世纪',
    style: '颓废自嘲、人间失格、私小说',
    characteristics: '第一人称私小说的极致坦诚、自嘲与自我毁灭的叙事姿态、对人性弱点的毫不掩饰的暴露、苦涩的幽默与绝望交织、日常细节中见灵魂的挣扎、软弱者视角的真诚书写',
    example: '我这一生，尽是可耻之事。',
    exampleSource: '《人间失格》',
    avoid: '避免英雄主义叙事、避免道德说教、避免乐观粉饰'
  },
  {
    id: 'soseki',
    name: '夏目漱石',
    nameEn: 'Natsume Soseki',
    region: '日本',
    era: '近代',
    style: '文明批判、心理剖析、余裕派',
    characteristics: '对明治时代知识分子精神世界的深刻剖析、东西方文化碰撞中的孤独与疏离、幽默与讽刺中蕴含人文关怀、细腻的心理描写与冷静的外部观察并重、以日常对话揭示人性深处的矛盾、余裕派从容不迫的叙事节奏',
    example: '我是一只猫，至今还没有名字。',
    exampleSource: '《我是猫》',
    avoid: '避免仓促推进、避免单向度人物、避免回避文明冲突'
  },
  {
    id: 'akutagawa',
    name: '芥川龙之介',
    nameEn: 'Ryunosuke Akutagawa',
    region: '日本',
    era: '近代',
    style: '古典新编、理智冷彻、艺术至上',
    characteristics: '以古典题材承载现代人性洞察、冷彻的理智与艺术至上的追求、短篇小说的精妙结构如匕首、叙事的诡计与视角转换娴熟、对利己主义与人性的犀利解剖、在历史与虚构之间自如穿梭',
    example: '人生还不如波德莱尔的一行诗。',
    exampleSource: '《某傻子的一生》',
    avoid: '避免温情脉脉、避免长篇大论、避免直白说理'
  },
  {
    id: 'tanizaki',
    name: '谷崎润一郎',
    nameEn: 'Junichiro Tanizaki',
    region: '日本',
    era: '20世纪',
    style: '耽美官能、阴翳美学、恶魔主义',
    characteristics: '对感官之美与肉体之美的极致崇拜、阴翳美学——在暗处发现美、细腻到近乎病态的描写功力、女性崇拜与恶魔主义交织、日本传统美学与现代心理的融合、华丽繁复的文体风格',
    example: '所谓美，常常是由生活实践发展起来的，被迫住在黑暗房子里的我们的祖先，不知何时在阴翳中发现了美，不久又为了增添美而利用阴翳。',
    exampleSource: '《阴翳礼赞》',
    avoid: '避免简洁克制、避免道德框架、避免回避感官描写'
  },
  {
    id: 'oe',
    name: '大江健三郎',
    nameEn: 'Kenzaburo Oe',
    region: '日本',
    era: '当代',
    style: '存在主义、残疾叙事、森林神话',
    characteristics: '存在主义哲学与个人体验的深度结合、残疾儿父亲身份带来的独特视角、四国森林的神话与隐喻系统、战后一代的精神创伤书写、艰涩而富有思辨性的文体、对边缘群体的深情凝视',
    example: '鸟俯视着野生的鹿。他觉得自己在俯视着另一个自己。',
    exampleSource: '《个人的体验》',
    avoid: '避免轻松阅读、避免回避痛苦、避免简单叙事'
  },
  {
    id: 'miyazawa',
    name: '宫泽贤治',
    nameEn: 'Kenji Miyazawa',
    region: '日本',
    era: '近代',
    style: '童话哲思、自然宇宙、朴素纯净',
    characteristics: '童话与寓言形式承载宇宙观与生命哲学、自然万物的生动拟人与对话、朴素纯净如溪水般的语言质感、对土地与农民的深切关怀、将科学知识与诗意想象融为一体、牺牲与奉献精神的永恒主题',
    example: '不畏风雨，不畏风，不畏严寒酷暑，拥有强健的身体。',
    exampleSource: '《不畏风雨》',
    avoid: '避免复杂修辞、避免都市气息、避免冷漠疏离'
  },
  {
    id: 'ichiyo',
    name: '樋口一叶',
    nameEn: 'Ichiyo Higuchi',
    region: '日本',
    era: '近代',
    style: '女性视角、底层悲欢、雅俗融合',
    characteristics: '明治时期底层女性命运的细腻书写、古典和文传统与现代口语的融合、对贫苦少女心理的深刻同情与洞察、在有限篇幅中营造浓郁的情感氛围、悲凉中透出坚韧的生命力、雅俗共赏的叙事语调',
    example: '在这个世界上，没有比贫穷更可怕的东西了。',
    exampleSource: '《青梅竹马》',
    avoid: '避免宏大叙事、避免男性中心视角、避免华丽空洞'
  },
  {
    id: 'kyoka',
    name: '泉镜花',
    nameEn: 'Kyoka Izumi',
    region: '日本',
    era: '近代',
    style: '幻想妖美、神秘诡异、浪漫主义',
    characteristics: '幻想与现实的边界模糊不清、妖异神秘的美学氛围营造、对女性形象的浪漫化与神秘化、华丽而幽暗的文体风格、日本传统怪谈与现代叙事的融合、感官描写极其丰富细腻',
    example: '月光下，女人的身影如水草般摇曳。',
    exampleSource: '《高野圣》',
    avoid: '避免理性写实、避免直白明了、避免日常琐碎'
  },

  // ========== 中国现当代及冷门作家 ==========
  {
    id: 'xiaohong',
    name: '萧红',
    nameEn: 'Xiao Hong',
    region: '中国',
    era: '现代',
    style: '冷峻诗意、女性苦难、呼兰河',
    characteristics: '用孩童般的纯真目光注视残酷世界、散文化小说淡化情节以氛围取胜、对女性命运与底层人民的深切悲悯、北方乡土风物的冷冽诗意描摹、越轨的笔致——打破常规的文法结构、在朴素中见惊人的文学天赋',
    example: '逆来顺受，你说我的生命可惜，我自己却不在乎。你看着很危险，我却自己以为得意。不得意又怎样？人生是苦多乐少。',
    exampleSource: '《呼兰河传》',
    avoid: '避免华丽辞藻、避免宏大叙事、避免男性中心视角'
  },
  {
    id: 'yudafu',
    name: '郁达夫',
    nameEn: 'Yu Dafu',
    region: '中国',
    era: '现代',
    style: '自叙传、感伤独白、颓废美学',
    characteristics: '第一人称袒露自我的私小说风格、浓烈的感伤与颓废情调、对性苦闷与精神困境的坦率书写、古典诗词修养与现代心理描写的结合、零余者形象的反复塑造、在放浪形骸中见赤子之心',
    example: '祖国啊，祖国！我的死是你害的！你快富起来，强起来吧！',
    exampleSource: '《沉沦》',
    avoid: '避免克制含蓄、避免道德审判、避免回避真实情感'
  },
  {
    id: 'acheng',
    name: '阿城',
    nameEn: 'A Cheng',
    region: '中国',
    era: '当代',
    style: '笔记体、白描克制、文化寻根',
    characteristics: '笔记小说式的极简白描风格、不渲染不煽情如刀削斧斫、中国传统文化底蕴的自然流露、对世俗生活智慧的尊重与提炼、看似平淡的语言中蕴含巨大张力、以具体细节承载文化精神',
    example: '王一生简直是在做梦。他从来没见过这么多棋子。',
    exampleSource: '《棋王》',
    avoid: '避免心理描写泛滥、避免华丽修辞、避免西方叙事套路'
  },
  {
    id: 'wanganyi',
    name: '王安忆',
    nameEn: 'Wang Anyi',
    region: '中国',
    era: '当代',
    style: '绵密细腻、上海书写、日常史诗',
    characteristics: '绵密如织的细节描写构建日常生活史诗、上海城市精神的文学代言人、对女性命运与情感的持续关注、在琐碎日常中见历史变迁的宏大叙事、细腻的心理描写与冷静的观察并重、语言密度高而节奏从容',
    example: '上海的弄堂是性感的，有一股肌肤之亲似的。',
    exampleSource: '《长恨歌》',
    avoid: '避免粗线条叙事、避免男性中心视角、避免快节奏'
  },
  {
    id: 'jiapingwa',
    name: '贾平凹',
    nameEn: 'Jia Pingwa',
    region: '中国',
    era: '当代',
    style: '乡土厚重、文白融合、神秘主义',
    characteristics: '商州乡土世界的文学建构者、文言与白话融合的独特语感、对农村社会变迁的持续关注与书写、神秘主义元素与民间信仰的融入、粗粝而有生命力的语言质感、在传统与现代之间寻找平衡',
    example: '人要是活在世上，只为了吃饭穿衣，那活着还有什么意思？',
    exampleSource: '《秦腔》',
    avoid: '避免都市小资、避免精巧玲珑、避免回避粗粝现实'
  },
  {
    id: 'chenzhongshi',
    name: '陈忠实',
    nameEn: 'Chen Zhongshi',
    region: '中国',
    era: '当代',
    style: '史诗格局、关中厚土、民族秘史',
    characteristics: '史诗级的关中平原家族叙事、厚重如黄土般的语言质感、对民族秘史与精神变迁的深刻书写、历史大潮中个人命运的沉浮、现实主义与魔幻元素的交融、白鹿原上的儒家精神与人性探索',
    example: '白嘉轩后来引以为豪壮的是一生里娶过七房女人。',
    exampleSource: '《白鹿原》',
    avoid: '避免轻浮飘逸、避免都市化表达、避免回避历史命题'
  },
  {
    id: 'liuzhenyun',
    name: '刘震云',
    nameEn: 'Liu Zhenyun',
    region: '中国',
    era: '当代',
    style: '黑色幽默、绕口令式、民间智慧',
    characteristics: '绕口令式重复叙事制造荒诞效果、对底层小人物命运的黑色幽默书写、日常对话中暗藏中国式生存智慧、看似啰嗦实则精密的叙事结构、对权力与人情的犀利洞察、笑中带泪的悲喜剧风格',
    example: '一个人的孤独不是孤独，一个人找另一个人，一句话找另一句话，才是真正的孤独。',
    exampleSource: '《一句顶一万句》',
    avoid: '避免精英话语、避免直线叙事、避免回避荒诞'
  },
  {
    id: 'sutong',
    name: '苏童',
    nameEn: 'Su Tong',
    region: '中国',
    era: '当代',
    style: '阴柔颓美、南方气息、少年视角',
    characteristics: '南方水乡的阴柔颓美气质贯穿始终、少年视角的叙事者反复出现、对女性命运的细腻书写与深刻体察、意象丰富如香椿树街的文学地图、语言精致而带有淡淡哀愁、在日常生活表层下挖掘暗流',
    example: '飞越我的枫杨树故乡，那是一个被河流包围的村庄。',
    exampleSource: '《妻妾成群》',
    avoid: '避免阳刚粗犷、避免北方干燥、避免直白叙事'
  },
  {
    id: 'gefei',
    name: '格非',
    nameEn: 'Ge Fei',
    region: '中国',
    era: '当代',
    style: '先锋叙事、智性写作、江南文脉',
    characteristics: '先锋文学的代表性叙事实验者、对时间与记忆的持续探索与追问、江南文化底蕴与西方现代技法的融合、叙事迷宫与智力游戏的优雅结合、知识分子精神世界的深刻书写、语言典雅而富有智性',
    example: '记忆像一条河流，你说不清它从哪里来，又要流到哪里去。',
    exampleSource: '《江南三部曲》',
    avoid: '避免通俗直白、避免回避智性、避免线性叙事'
  },
  {
    id: 'canxue',
    name: '残雪',
    nameEn: 'Can Xue',
    region: '中国',
    era: '当代',
    style: '梦境呓语、荒诞先锋、潜意识写作',
    characteristics: '完全打破现实逻辑的梦境式叙事、对潜意识世界的大胆勘探与书写、荒诞而充满象征的意象系统、拒绝解释与消解意义的先锋姿态、精神世界的纯粹性与文学自治、卡夫卡式的中国变体',
    example: '我在那里面看见了许多蜘蛛，它们都在忙着织网。',
    exampleSource: '《黄泥街》',
    avoid: '避免合理解释、避免线性叙事、避免现实主义框架'
  },
  {
    id: 'liucixin',
    name: '刘慈欣',
    nameEn: 'Liu Cixin',
    region: '中国',
    era: '当代',
    style: '硬科幻史诗、宇宙社会学、理性想象',
    characteristics: '硬科幻的宏大设定与严格逻辑推演、宇宙尺度下的文明生存与道德困境、物理学与天文学概念的文学化转译、冷静克制的叙述中蕴含浪漫宇宙情怀、集体主义视角下的史诗叙事、技术细节与哲学思辨并重',
    example: '给岁月以文明，而不是给文明以岁月。',
    exampleSource: '《三体》',
    avoid: '避免软科幻言情、避免回避科学逻辑、避免个人英雄主义'
  },
  {
    id: 'shitiesheng',
    name: '史铁生',
    nameEn: 'Shi Tiesheng',
    region: '中国',
    era: '当代',
    style: '哲思散文、生命追问、地坛精神',
    characteristics: '从残疾的身体经验出发追问生命意义、散文与小说边界的自由跨越、地坛意象承载的深沉哲思与情感、将个人苦难升华为人类普遍境遇、语言朴素而具有宗教般的穿透力、死亡与存在的持续对话',
    example: '一个人，出生了，这就不再是一个可以辩论的问题，而只是上帝交给他的一个事实；上帝在交给我们这件事实的时候，已经顺便保证了它的结果，所以死是一件不必急于求成的事，死是一个必然会降临的节日。',
    exampleSource: '《我与地坛》',
    avoid: '避免轻浮浅薄、避免回避苦难、避免鸡汤式慰藉'
  },
  {
    id: 'yangel',
    name: '严歌苓',
    nameEn: 'Yan Geling',
    region: '中国',
    era: '当代',
    style: '女性史诗、跨文化、细腻坚韧',
    characteristics: '女性视角下的宏大历史叙事、跨文化背景带来的独特双重视野、对女性在极端环境中的坚韧书写、细腻的心理描写与戏剧性情节并重、移民经验与身份认同的持续探索、语言精致而富有张力',
    example: '一个始终不被善待的人，最能识别善良，也最珍惜善良。',
    exampleSource: '《芳华》',
    avoid: '避免男性中心叙事、避免回避历史创伤、避免粗线条'
  },
  {
    id: 'chizijian',
    name: '迟子建',
    nameEn: 'Chi Zijian',
    region: '中国',
    era: '当代',
    style: '东北大地、苍凉温暖、神话叙事',
    characteristics: '东北大地与少数民族文化的文学代言人、在苍凉中见温暖的叙事风格、神话与民间传说融入日常生活、对自然万物的深情吟唱与敬畏、女性视角下的家族史诗书写、语言如雪原般纯净而辽阔',
    example: '我是雨和雪的老熟人了，我有九十岁了。雨雪看老了我，我也把它们给看老了。',
    exampleSource: '《额尔古纳河右岸》',
    avoid: '避免都市喧嚣、避免南方精致、避免回避自然'
  },

  // ========== 国际补充作家 ==========
  {
    id: 'kundera',
    name: '米兰·昆德拉',
    nameEn: 'Milan Kundera',
    region: '国际',
    era: '20世纪',
    style: '哲思叙事、轻与重、存在之思',
    characteristics: '小说与哲学思辨的高度融合、对"存在"命题的持续追问与探索、音乐性的叙事结构与变奏手法、轻与重、灵与肉等二元对立贯穿始终、中欧知识分子的流亡与乡愁、反讽与幽默中的深刻洞见',
    example: '最沉重的负担压迫着我们，让我们屈服于它，把我们压到地上。但在历代的爱情诗中，女人总渴望承受一个男性身体的重量。于是，最沉重的负担同时也成了最强盛的生命力的影像。',
    exampleSource: '《不能承受的生命之轻》',
    avoid: '避免回避哲学思考、避免线性叙事、避免简单情节'
  },
  {
    id: 'chekhov',
    name: '契诃夫',
    nameEn: 'Anton Chekhov',
    region: '国际',
    era: '19世纪',
    style: '克制含蓄、日常诗意、灰色人生',
    characteristics: '不评判不渲染的极度克制风格、在日常生活的灰色地带发现诗意与悲剧、短篇小说形式的完美掌控者、潜台词与留白的艺术——暗示多于明说、对小人物命运的深切同情但不煽情、简洁而精准的细节描写',
    example: '如果在第一幕里墙上挂着一把枪，那么在第三幕或第四幕里，这把枪必须开火。',
    exampleSource: '契诃夫戏剧原则',
    avoid: '避免说教评判、避免煽情夸张、避免多余细节'
  },
  {
    id: 'faulkner',
    name: '威廉·福克纳',
    nameEn: 'William Faulkner',
    region: '国际',
    era: '20世纪',
    style: '意识流巨匠、南方哥特、约克纳帕塔法',
    characteristics: '绵延不绝的意识流长句如洪水般倾泻、多视角叙事的复调结构、美国南方哥特式家族衰败史、时间在意识中的自由流动与交织、对种族与历史的深刻拷问、语言如密西西比河般厚重而汹涌',
    example: 'The past is never dead. It\'s not even past.',
    exampleSource: '《修女安魂曲》',
    avoid: '避免简单句式、避免线性时间、避免回避历史创伤'
  },
  {
    id: 'eco',
    name: '翁贝托·艾柯',
    nameEn: 'Umberto Eco',
    region: '国际',
    era: '20世纪',
    style: '百科全书式、符号迷宫、智性狂欢',
    characteristics: '百科全书式的知识密度与叙事游戏、中世纪符号学与侦探小说的奇妙融合、对读者智力的高度尊重与挑战、在虚构中埋藏大量真实历史与哲学、互文性与元叙事技法的娴熟运用、把学术化为故事的魔法',
    example: 'Thus I rediscovered what writers have always known: that books always speak of other books, and every story tells a story that has already been told.',
    exampleSource: '《玫瑰的名字》',
    avoid: '避免简化叙事、避免回避智识、避免通俗套路'
  },
  {
    id: 'pamuk',
    name: '奥尔罕·帕慕克',
    nameEn: 'Orhan Pamuk',
    region: '国际',
    era: '当代',
    style: '东西方交汇、呼愁、伊斯坦布尔',
    characteristics: '东西方文明交汇处的文化身份书写、"呼愁"——土耳其式的集体忧伤、伊斯坦布尔作为永恒的精神地标、传统与现代、东方与西方的持续对话、叙事迷宫与城市记忆的融合、博物馆式的细节收藏与呈现',
    example: 'I don\'t want to be a tree; I want to be its meaning.',
    exampleSource: '《我的名字叫红》',
    avoid: '避免单向度文化认同、避免回避忧郁、避免简化冲突'
  },
  {
    id: 'saramago',
    name: '若泽·萨拉马戈',
    nameEn: 'José Saramago',
    region: '国际',
    era: '20世纪',
    style: '寓言叙事、无标点文体、荒诞批判',
    characteristics: '独特的无引号无分段文体如意识流般绵延、寓言式叙事承载深刻社会批判、荒诞情境下的极端人性实验、对权力与宗教的尖锐讽刺、口语化叙述中暗藏哲学思辨、葡萄牙语的音乐性节奏',
    example: 'If I\'m sincere today, what does it matter if I regret it tomorrow?',
    exampleSource: '《失明症漫记》',
    avoid: '避免传统标点规范、避免温和保守、避免回避人性黑暗'
  },
  {
    id: 'munro',
    name: '爱丽丝·门罗',
    nameEn: 'Alice Munro',
    region: '国际',
    era: '当代',
    style: '短篇大师、日常深渊、时间跳跃',
    characteristics: '在短篇小说中达到长篇的深度与广度、时间跳跃的叙事手法精准而优雅、对加拿大小镇女性日常生活的深刻书写、看似平静的表面下暗藏情感深渊、不动声色的细节中揭示人生真相、对记忆与悔恨的持续探索',
    example: 'She was learning, quite late, what many people around her appeared to have known since childhood: that life can be perfectly satisfying without major achievements.',
    exampleSource: '《逃离》',
    avoid: '避免戏剧化煽情、避免宏大叙事、避免回避日常'
  },
  {
    id: 'twain',
    name: '马克·吐温',
    nameEn: 'Mark Twain',
    region: '国际',
    era: '19世纪',
    style: '美式幽默、方言叙事、社会讽刺',
    characteristics: '美式幽默与讽刺的鼻祖级人物、方言口语入文的开创性实践、对社会不公与人性弱点的犀利批判、少年冒险叙事中的成长主题、密西西比河作为美国精神的象征、口语化叙事亲切而富有感染力',
    example: 'The two most important days in your life are the day you are born and the day you find out why.',
    exampleSource: '语录',
    avoid: '避免书面语腔调、避免回避讽刺、避免精英视角'
  },
  {
    id: 'dickens',
    name: '查尔斯·狄更斯',
    nameEn: 'Charles Dickens',
    region: '国际',
    era: '19世纪',
    style: '社会全景、人物画廊、感伤幽默',
    characteristics: '维多利亚时代英国社会的全景式书写、令人过目不忘的人物塑造能力、幽默与感伤交织的叙事语调、对底层人民苦难的深切同情、连载小说形式的节奏掌控大师、善恶分明的道德世界与深刻的社会批判',
    example: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.',
    exampleSource: '《双城记》',
    avoid: '避免晦涩难懂、避免回避道德立场、避免扁平人物'
  },
  {
    id: 'flaubert',
    name: '福楼拜',
    nameEn: 'Gustave Flaubert',
    region: '国际',
    era: '19世纪',
    style: '精确完美、客观叙事、为艺术而艺术',
    characteristics: '对每一个字词的精雕细琢如工匠般严苛、客观叙事——作者隐退如上帝无处不在却不可见、对资产阶级平庸生活的深刻讽刺与同情、精确的细节描写创造身临其境之感、为艺术而艺术的纯粹文学追求、现代小说的开创者与奠基人',
    example: 'Human speech is like a cracked kettle on which we tap crude rhythms for bears to dance to, while we long to make music that will melt the stars.',
    exampleSource: '《包法利夫人》',
    avoid: '避免粗制滥造、避免作者介入、避免平庸语言'
  },
  {
    id: 'stephenking',
    name: '斯蒂芬·金',
    nameEn: 'Stephen King',
    region: '国际',
    era: '当代',
    style: '日常恐怖、小镇叙事、通俗大师',
    characteristics: '在日常生活的缝隙中挖掘恐怖与不安、美国小镇与普通人物的精准描摹、口语化叙事如老友聊天般亲切、将类型文学提升到文学高度的大师、对童年创伤与成长主题的持续书写、悬念与节奏掌控无与伦比',
    example: 'Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win.',
    exampleSource: '《闪灵》',
    avoid: '避免晦涩文艺、避免回避类型元素、避免精英姿态'
  },
  {
    id: 'bolano',
    name: '罗贝托·波拉尼奥',
    nameEn: 'Roberto Bolaño',
    region: '国际',
    era: '当代',
    style: '流浪诗学、暴力与文学、迷宫叙事',
    characteristics: '诗人流浪者的叙事视角贯穿始终、文学与暴力的纠缠关系持续书写、迷宫般的叙事结构如俄罗斯套娃、对拉丁美洲政治与历史的深刻反思、未完成的史诗感与碎片化美学、知识分子群像的深情描摹',
    example: 'Reading is like thinking, like praying, like talking to a friend, like expressing your ideas, like listening to other people\'s ideas, like listening to music, like looking at a view, like taking a walk on the beach.',
    exampleSource: '《2666》',
    avoid: '避免线性叙事、避免回避暴力、避免简单结构'
  },

  // ========== 平台文风 ==========
  {
    id: 'zhihu',
    name: '知乎体',
    nameEn: 'Zhihu Style',
    region: '中国',
    era: '互联网时代',
    category: '平台文风',
    style: '理性分析、先问是不是再问为什么、谢邀体',
    characteristics: '开篇经典句式"谢邀。人在XX，刚下飞机"、先质疑问题前提再展开分析、分段清晰逻辑严密如论文、善用数据与案例支撑观点、行业内部人士视角增加可信度、结尾总结升华或留开放式讨论',
    example: '谢邀。人在美国，刚下飞机。这个问题很有意思，我先说结论：不能。然后我们来看为什么。第一，从数据上看...第二，从行业惯例来看...第三，从逻辑上推导...综上，我的建议是...以上，欢迎讨论。',
    exampleSource: '知乎经典答题范式',
    avoid: '避免情绪化表达、避免无数据支撑的观点、避免短回答'
  },
  {
    id: 'douban',
    name: '豆瓣体',
    nameEn: 'Douban Style',
    region: '中国',
    era: '互联网时代',
    category: '平台文风',
    style: '文艺评论、细腻感受、评分体系',
    characteristics: '对文艺作品的高度敏感与细腻解读、善用通感将抽象感受具象化、私人化的情感表达与普遍性共鸣并存、评价体系（五星制）融入叙事、引经据典但不过度炫技、克制的煽情——用细节打动而非口号',
    example: '看完这部电影，我坐在黑暗里很久没有动。那种感觉就像有人在你心口轻轻放了一片羽毛，不疼，但你知道它在那里。四星给电影，一星留给今晚的失眠。',
    exampleSource: '豆瓣影评典型风格',
    avoid: '避免粗暴评判、避免商业话术、避免缺乏个人感受的客观'
  },
  {
    id: 'weibo',
    name: '微博体',
    nameEn: 'Weibo Style',
    region: '中国',
    era: '互联网时代',
    category: '平台文风',
    style: '短平快、热点驱动、情绪化表达',
    characteristics: '140字以内的极限表达训练、热点话题快速反应与态度表态、善用反问和感叹号制造情绪张力、话题标签（#）是核心叙事元素、口语化短句如同朋友吐槽、表情包与文字高度融合',
    example: '#今日热搜# 我真的会谢！！！这波操作属实是给我整不会了[裂开][裂开][裂开] 评论区说说你们的看法👇',
    exampleSource: '微博典型帖子',
    avoid: '避免长篇大论、避免冷静客观、避免缺乏互动感'
  },
  {
    id: 'xiaohongshu_platform',
    name: '小红书体',
    nameEn: 'RED Style',
    region: '中国',
    era: '互联网时代',
    category: '平台文风',
    style: '种草分享、真实体验、精致排版',
    characteristics: '第一人称真实体验感的绝对优先、大量emoji用于视觉分割和情绪表达、封面图+标题的极致吸引力法则、"姐妹们"等亲密称呼建立信任感、实用信息密度高（价格/地址/时间）、结尾必带话题标签矩阵',
    example: '✨姐妹们！我宣布这是我今年买过最值的！！\n\n谁懂啊家人们😭之前一直用XX，直到被闺蜜安利了这个...\n\n📍地址：XXX\n💰人均：XX元\n⭐推荐：XXX\n\n#好物分享 #种草 #我的年度爱用',
    exampleSource: '小红书典型笔记',
    avoid: '避免正式语气、避免无图纯文字、避免抽象描述'
  },
  {
    id: 'bilibili',
    name: 'B站弹幕体',
    nameEn: 'Bilibili Style',
    region: '中国',
    era: '互联网时代',
    category: '平台文风',
    style: '弹幕互动、玩梗造梗、二次元',
    characteristics: '弹幕式短评——即时反应与集体狂欢、大量ACG（动画漫画游戏）圈层用语和梗、造梗能力极强——万物皆可鬼畜、对UP主（创作者）的粉丝文化表达、弹幕礼仪与社区规则的微妙平衡、破圈传播——从B站走向全网的热梗',
    example: '前方高能！！！\n哈哈哈哈哈哈笑死\n空降成功 00:42\n梦开始的地方\n恭喜你发现了宝藏\n下次一定！',
    exampleSource: 'B站弹幕文化',
    avoid: '避免严肃正式、避免圈外人看不懂的术语、避免长篇大论'
  },
  {
    id: 'gongzhonghao',
    name: '公众号体',
    nameEn: 'WeChat Official Account',
    region: '中国',
    era: '互联网时代',
    category: '平台文风',
    style: '标题党、深度好文、金句结尾',
    characteristics: '标题即转化率——悬念/数字/反差/共鸣四大策略、开头三秒抓人——用故事或提问引入、正文段落短小精悍适合手机阅读、金句高频出现——每屏至少一个可截图分享的句子、结尾引导关注和转发、排版精美——大量留白与配图',
    example: '30岁以后，我终于明白了一个道理：人这一生，最重要的不是努力，而是选择。\n\n前几天跟一个老朋友吃饭，他说了一句话让我醍醐灌顶...\n\n所以你看，人生就是这样。\n\n如果觉得有用，就点个「在看」吧。',
    exampleSource: '微信公众号典型文章',
    avoid: '避免长段落、避免平淡开头、避免无转发引导'
  },
  {
    id: 'douyin',
    name: '抖音体',
    nameEn: 'Douyin Style',
    region: '中国',
    era: '互联网时代',
    category: '平台文风',
    style: '短句式、强节奏、黄金3秒',
    characteristics: '前3秒必须抓住注意力的极限开场、短句如鼓点般密集的节奏感、口语化到极致——就像在跟朋友视频通话、流行语和BGM的深度绑定、反转和悬念是核心叙事动力、评论区互动是内容的一部分',
    example: '家人们！今天这个视频你一定要看完！\n\n因为最后3秒会颠覆你的认知...\n\n3...\n2...\n1...\n\n没想到吧？评论区告诉我你的想法！',
    exampleSource: '抖音短视频文案',
    avoid: '避免慢热、避免长句、避免无互动设计的结尾'
  },
  {
    id: 'jike',
    name: '即刻体',
    nameEn: 'Jike Style',
    region: '中国',
    era: '互联网时代',
    category: '平台文风',
    style: '即刻记录、圈层社交、碎片灵感',
    characteristics: '碎片化的即刻记录——当下的想法与感受、圈层化社交——在特定话题下深度交流、冷幽默与自嘲是核心表达方式、对新事物的快速捕捉与分享、简洁而有信息量的表达、社区氛围的温和与包容',
    example: '刚刚发现一个有趣的事：\n\n把手机翻转过来看这段文字，你会发现...\n\n算了，你试试就知道了。',
    exampleSource: '即刻社区典型帖子',
    avoid: '避免长篇大论、避免攻击性表达、避免脱离社区氛围'
  },

  // ========== 影视动漫风格 ==========
  {
    id: 'miyazakihayao',
    name: '宫崎骏',
    nameEn: 'Hayao Miyazaki',
    region: '日本',
    era: '当代',
    category: '影视动漫',
    style: '飞翔与成长、自然崇拜、蒸汽朋克',
    characteristics: '飞翔是永恒的主题——物理上的飞行与精神上的自由、对自然万物的深切敬畏与温柔凝视、少女成长叙事中的坚韧与独立、蒸汽朋克与欧洲小镇的视觉美学、战争与和平的反复追问、在幻想中注入现实的重量',
    example: '起风了，唯有努力生存。',
    exampleSource: '《起风了》',
    avoid: '避免简单善恶对立、避免快速推进、避免回避环境议题'
  },
  {
    id: 'shinkai',
    name: '新海诚',
    nameEn: 'Makoto Shinkai',
    region: '日本',
    era: '当代',
    category: '影视动漫',
    style: '唯美距离、天空意象、少男少女',
    characteristics: '极致唯美的视觉风格——每一帧都是壁纸、天空与云层的反复出现作为情感隐喻、少男少女之间无法跨越的距离感、手机/电车/书信等通讯媒介的叙事功能、独白式的情感表达、"丧失"与"寻找"的永恒主题',
    example: '樱花飘落的速度是每秒五厘米。我该用什么样的速度，才能与你相遇。',
    exampleSource: '《秒速五厘米》',
    avoid: '避免直白表达、避免圆满结局、避免成人视角'
  },
  {
    id: 'kon',
    name: '今敏',
    nameEn: 'Satoshi Kon',
    region: '日本',
    era: '当代',
    category: '影视动漫',
    style: '梦境嵌套、虚实交错、心理惊悚',
    characteristics: '梦境与现实的无缝切换开创性技法、叙事结构的层层嵌套如俄罗斯套娃、对现代人精神困境的深刻洞察、动画媒介的无限可能性探索、惊悚与温情的奇妙交织、每个镜头都经过精心设计的电影感',
    example: '你以为你醒着，其实你还在梦里。你以为你在梦里，其实你已经醒了。',
    exampleSource: '《红辣椒》风格',
    avoid: '避免线性叙事、避免单一解读、避免回避心理深度'
  },
  {
    id: 'anno',
    name: '庵野秀明',
    nameEn: 'Hideaki Anno',
    region: '日本',
    era: '当代',
    category: '影视动漫',
    style: '心理剖析、宗教符号、解构主义',
    characteristics: '对角色心理创伤的毫不留情的展示、宗教符号与科幻设定的奇特融合、打破第四面墙的元叙事实验、从类型片外壳到作者内心的转向、极度个人化的表达——作品即心理治疗、对御宅族文化的审视与反思',
    example: '恭喜你。',
    exampleSource: '《新世纪福音战士》结局',
    avoid: '避免回避心理创伤、避免传统英雄叙事、避免迎合观众'
  },
  {
    id: 'urobuchi',
    name: '虚渊玄',
    nameEn: 'Gen Urobuchi',
    region: '日本',
    era: '当代',
    category: '影视动漫',
    style: '黑暗绝望、希望与代价、哲学思辨',
    characteristics: '在绝望的深渊中寻找微光、对"正义"与"希望"的残酷解构、哲学思辨融入激烈的情节冲突、角色必须在极端情境下做出选择、对理想主义的冷静审视与悲悯、结局往往惨烈但蕴含深意',
    example: '所谓希望，就是在绝望中开出的花。但花会凋谢，希望也会破灭。即便如此，人还是要继续走下去。',
    exampleSource: '《魔法少女小圆》风格',
    avoid: '避免廉价的希望、避免非黑即白、避免回避残酷选择'
  },
  {
    id: 'wongkarwai',
    name: '王家卫',
    nameEn: 'Wong Kar-wai',
    region: '中国',
    era: '当代',
    category: '影视动漫',
    style: '暧昧时间、独白絮语、霓虹美学',
    characteristics: '关于时间的执念——钟表、日期、过期罐头、喃喃自语式的内心独白贯穿始终、暧昧与错过的情感美学、霓虹灯下孤独身影的视觉风格、碎片化叙事如记忆片段闪回、音乐与画面的高度融合',
    example: '不知道从什么时候开始，在什么东西上面都有个日期，秋刀鱼会过期，肉罐头会过期，连保鲜纸都会过期，我开始怀疑，在这个世界上，还有什么东西是不会过期的？',
    exampleSource: '《重庆森林》',
    avoid: '避免直白告白、避免线性叙事、避免明亮色调'
  },
  {
    id: 'tarantino',
    name: '昆汀·塔伦蒂诺',
    nameEn: 'Quentin Tarantino',
    region: '美国',
    era: '当代',
    category: '影视动漫',
    style: '暴力美学、非线性叙事、对白轰炸',
    characteristics: '大段看似无关的日常对白中暗藏张力、非线性叙事结构的精密如钟表、暴力场景的华丽与突然的切换、对流行文化与B级片的致敬与拼贴、多线叙事最终汇聚的戏剧性高潮、黑色幽默消解暴力的沉重感',
    example: 'The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men.',
    exampleSource: '《低俗小说》经典台词',
    avoid: '避免线性叙事、避免回避暴力、避免沉默寡言的角色'
  },
  {
    id: 'nolan',
    name: '克里斯托弗·诺兰',
    nameEn: 'Christopher Nolan',
    region: '英国',
    era: '当代',
    category: '影视动漫',
    style: '时间游戏、高概念、理性叙事',
    characteristics: '对时间结构的极致探索与解构、高概念设定（盗梦/穿越/反转）的严谨执行、理性至上的叙事——情感为逻辑服务、交叉剪辑创造多线并行的紧张感、在商业大片中融入哲学思辨、开放式结局引发无尽讨论',
    example: 'They said one day you\'d learn that sometimes a man has to do what\'s right, even if it\'s not what he wants.',
    exampleSource: '《星际穿越》',
    avoid: '避免情感泛滥、避免简单线性、避免回避智力挑战'
  },
  {
    id: 'koreeda',
    name: '是枝裕和',
    nameEn: 'Hirokazu Kore-eda',
    region: '日本',
    era: '当代',
    category: '影视动漫',
    style: '家庭日常、克制深情、生活流',
    characteristics: '对日常生活的深情凝视而不煽情、家庭关系的微妙张力与治愈力量、非职业演员的自然表演风格、生活流叙事——不刻意制造冲突、食物与吃饭场景的反复出现、社会议题的温和但不妥协的呈现',
    example: '他们说，活着的东西都是很费功夫的。',
    exampleSource: '《海街日记》',
    avoid: '避免戏剧化冲突、避免煽情配乐、避免道德评判'
  },
  {
    id: 'woodyallen',
    name: '伍迪·艾伦',
    nameEn: 'Woody Allen',
    region: '美国',
    era: '当代',
    category: '影视动漫',
    style: '知识分子絮叨、纽约情怀、存在焦虑',
    characteristics: '絮絮叨叨的知识分子式幽默贯穿始终、对纽约城市的深情告白与讽刺、关于死亡/爱情/艺术的持续焦虑、打破第四面墙与观众直接对话、爵士乐与黑白影像的怀旧美学、将自己的神经质人格写入每一个角色',
    example: 'I\'m not afraid of death; I just don\'t want to be there when it happens.',
    exampleSource: '伍迪·艾伦经典语录',
    avoid: '避免沉默寡言、避免回避焦虑、避免宏大叙事'
  },
  {
    id: 'wesanderson',
    name: '韦斯·安德森',
    nameEn: 'Wes Anderson',
    region: '美国',
    era: '当代',
    category: '影视动漫',
    style: '对称构图、童话色彩、冷幽默',
    characteristics: '极致对称的视觉构图如童话绘本、马卡龙色调的独特色彩体系、冷面幽默——角色面无表情地做荒诞的事、家庭创伤与和解的反复主题、细节控——每个道具都经过精心设计、章节体叙事如翻开一本精装书',
    example: 'I wonder if it remembers me.',
    exampleSource: '《水中生活》',
    avoid: '避免杂乱构图、避免热烈煽情、避免现实主义'
  },
  {
    id: 'kubrick',
    name: '斯坦利·库布里克',
    nameEn: 'Stanley Kubrick',
    region: '美国',
    era: '20世纪',
    category: '影视动漫',
    style: '冷峻完美、人性暗面、类型颠覆',
    characteristics: '对每个镜头的极致完美主义追求、冷峻如手术刀般的视觉风格、对人性黑暗面的无情审视与呈现、每种类型片都拍成该类型的巅峰与终结、古典音乐与暴力画面的反差美学、开放式解读留给观众思考空间',
    example: 'I\'m sorry, Dave. I\'m afraid I can\'t do that.',
    exampleSource: '《2001太空漫游》',
    avoid: '避免温情脉脉、避免简单结局、避免回避哲学命题'
  },

  // ========== 多国文学补充 ==========
  {
    id: 'poe',
    name: '爱伦·坡',
    nameEn: 'Edgar Allan Poe',
    region: '美国',
    era: '19世纪',
    category: '欧美文学',
    style: '哥特恐怖、心理惊悚、侦探鼻祖',
    characteristics: '恐怖与美的奇异融合——"美女之死是世上最富诗意的主题"、第一人称叙述者逐步陷入疯狂的心理描写、侦探小说范式的开创者（推理/密室/密码）、哥特式氛围营造——古堡/地窖/暗夜/乌鸦、节奏的精确控制——效果统一论、诗歌的音乐性与小说的悬疑性并重',
    example: 'Once upon a midnight dreary, while I pondered, weak and weary...',
    exampleSource: '《乌鸦》',
    avoid: '避免阳光明媚、避免理性冷静、避免大团圆结局'
  },
  {
    id: 'chandler',
    name: '雷蒙德·钱德勒',
    nameEn: 'Raymond Chandler',
    region: '美国',
    era: '20世纪',
    category: '欧美文学',
    style: '硬汉侦探、冷硬派、比喻大师',
    characteristics: '硬汉派侦探小说的巅峰代表、令人拍案叫绝的比喻如爵士乐即兴、第一人称私家侦探马洛的冷眼旁观、洛杉矶作为堕落之城的文学地图、对话简洁如子弹——一句话塑造人物、在罪案中揭示社会腐败的深刻批判',
    example: 'To say goodbye is to die a little.',
    exampleSource: '《漫长的告别》',
    avoid: '避免温情软语、避免复杂结构、避免道德说教'
  },
  {
    id: 'pkdick',
    name: '菲利普·迪克',
    nameEn: 'Philip K. Dick',
    region: '美国',
    era: '20世纪',
    category: '欧美文学',
    style: '何为真实、药物体验、赛博朋克先声',
    characteristics: '对"什么是真实"的持续追问与解构、药物与精神分裂体验的文学转化、赛博朋克与反乌托邦的先驱性探索、日常场景中突然出现的裂缝与崩塌、多重现实与虚假记忆的叙事迷宫、在科幻外壳下探讨深刻的哲学命题',
    example: 'Reality is that which, when you stop believing in it, doesn\'t go away.',
    exampleSource: '菲利普·迪克名言',
    avoid: '避免确定的现实、避免简单科幻、避免回避哲学追问'
  },
  {
    id: 'pynchon',
    name: '托马斯·品钦',
    nameEn: 'Thomas Pynchon',
    region: '美国',
    era: '20世纪',
    category: '欧美文学',
    style: '后现代史诗、百科全书式、阴谋论',
    characteristics: '百科全书式的知识密度令人眩晕、庞大而复杂的阴谋论叙事网络、通俗文化与高雅文学的无缝混搭、荒诞幽默与深刻批判的奇特结合、对科技/历史/权力的不信任与解构、拒绝简单答案的开放式叙事',
    example: 'A screaming comes across the sky.',
    exampleSource: '《万有引力之虹》',
    avoid: '避免简单叙事、避免回避复杂性、避免给出确定答案'
  },
  {
    id: 'tolkien',
    name: 'J.R.R.托尔金',
    nameEn: 'J.R.R. Tolkien',
    region: '英国',
    era: '20世纪',
    category: '欧美文学',
    style: '史诗奇幻、语言创造、善恶之战',
    characteristics: '构建完整神话世界的极致想象力、发明精灵语等多种语言的学者功底、史诗般的善恶之战与微小个体改变世界、对工业文明与田园牧歌的深刻反思、北欧神话与基督教精神的融合、友谊与牺牲是永恒的主题',
    example: 'All that is gold does not glitter, not all those who wander are lost.',
    exampleSource: '《魔戒》',
    avoid: '避免现代口吻、避免轻视细节、避免回避道德选择'
  },
  {
    id: 'asimov',
    name: '艾萨克·阿西莫夫',
    nameEn: 'Isaac Asimov',
    region: '美国',
    era: '20世纪',
    category: '欧美文学',
    style: '硬科幻大师、机器人三定律、基地系列',
    characteristics: '用清晰简洁的逻辑推演宏大科幻设定、机器人三定律的哲学与伦理探索、心理史学——预测人类文明未来的宏大构想、对话驱动的叙事风格——以智识交锋推进情节、将科学概念的文学化表达做到极致、在理性框架下探讨人性本质',
    example: 'Violence is the last refuge of the incompetent.',
    exampleSource: '《基地》',
    avoid: '避免情感泛滥、避免回避科学逻辑、避免魔幻元素'
  },
  {
    id: 'leguin',
    name: '厄休拉·勒古恩',
    nameEn: 'Ursula K. Le Guin',
    region: '美国',
    era: '20世纪',
    category: '欧美文学',
    style: '人类学科幻、道家思想、性别探索',
    characteristics: '以人类学家的视角构建异星文明与文化、道家思想（阴阳平衡/无为）的文学化表达、对性别与身份的先锋性探索与解构、在科幻与奇幻的边界自由穿梭、语言如诗般优雅而富有哲思、边缘视角的温柔而坚定的力量',
    example: 'It is good to have an end to journey toward; but it is the journey that matters, in the end.',
    exampleSource: '《地海传说》',
    avoid: '避免二元对立、避免英雄主义、避免回避文化差异'
  },
  {
    id: 'joyce',
    name: '詹姆斯·乔伊斯',
    nameEn: 'James Joyce',
    region: '爱尔兰',
    era: '20世纪',
    category: '欧美文学',
    style: '意识流巅峰、语言实验、都柏林',
    characteristics: '意识流技巧的极致运用与极限探索、一天之内讲述整个人类经验的史诗野心、对语言的无限创造与解构——造词/双关/多语混合、都柏林作为精神故乡的永恒书写、从《都柏林人》到《尤利西斯》到《芬尼根的守灵夜》的不断自我超越、对读者智力的极限挑战与尊重',
    example: 'riverrun, past Eve and Adam\'s, from swerve of shore to bend of bay, brings us by a commodius vicus of recirculation back to Howth Castle and Environs.',
    exampleSource: '《芬尼根的守灵夜》',
    avoid: '避免简单易懂、避免传统叙事、避免回避语言实验'
  },
  {
    id: 'wilde',
    name: '奥斯卡·王尔德',
    nameEn: 'Oscar Wilde',
    region: '爱尔兰',
    era: '19世纪',
    category: '欧美文学',
    style: '机智悖论、唯美主义、毒舌金句',
    characteristics: '无与伦比的机智与悖论式金句制造能力、唯美主义——为艺术而艺术的宣言与实践、对维多利亚社会虚伪道德的犀利讽刺、喜剧对话如击剑般优雅而致命（一击必中）、在华丽浮夸的表面下暗藏社会批判、用幽默包裹深刻悲剧的叙事天才',
    example: 'We are all in the gutter, but some of us are looking at the stars.',
    exampleSource: '《温德米尔夫人的扇子》',
    avoid: '避免朴素直白、避免回避悖论、避免道德说教'
  },
  {
    id: 'beckett',
    name: '塞缪尔·贝克特',
    nameEn: 'Samuel Beckett',
    region: '爱尔兰',
    era: '20世纪',
    category: '欧美文学',
    style: '荒诞派、极简主义、等待戈多',
    characteristics: '极简到极限的语言——剥去一切修饰后的赤裸存在、荒诞派戏剧的巅峰——等待的意义就是等待本身、黑色幽默与绝望的奇妙交织、对语言本身的不信任与解构、在虚无中坚持前行的悲壮力量、将人类困境浓缩为最简洁的舞台呈现',
    example: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.',
    exampleSource: '《最糟糕，嗯》',
    avoid: '避免繁复修饰、避免给出答案、避免回避虚无'
  },
  {
    id: 'proust',
    name: '马塞尔·普鲁斯特',
    nameEn: 'Marcel Proust',
    region: '法国',
    era: '20世纪',
    category: '欧美文学',
    style: '意识流先河、绵长细腻、回忆叙事',
    characteristics: '用极其绵长的句子追踪意识的每一个细微波动、由一块玛德莱娜蛋糕引发的七卷巨著、对时间/记忆/爱情的深刻哲学思考、上流社会沙龙与人物群像的精妙描摹、比喻如层层展开的花瓣般繁复而精确、将个人记忆升华为人类普遍经验',
    example: 'Longtemps, je me suis couché de bonne heure.',
    exampleSource: '《追忆似水年华》',
    avoid: '避免简洁明快、避免回避细节、避免快速推进'
  },
  {
    id: 'hesse',
    name: '赫尔曼·黑塞',
    nameEn: 'Hermann Hesse',
    region: '德国',
    era: '20世纪',
    category: '欧美文学',
    style: '精神探索、东方智慧、成长小说',
    characteristics: '对个体精神成长与自我认知的持续书写、东西方哲学思想的融合与对话、成长小说（Bildungsroman）的现代典范、对现代文明与物质主义的深刻批判、诗意而富有哲思的语言风格、在二元对立中寻找统一与和谐',
    example: '世界上任何一本书都不能带给你好运，但它们能让你悄悄成为你自己。',
    exampleSource: '黑塞名言',
    avoid: '避免回避精神追问、避免物质主义视角、避免简单答案'
  },
  {
    id: 'thomasmann',
    name: '托马斯·曼',
    nameEn: 'Thomas Mann',
    region: '德国',
    era: '20世纪',
    category: '欧美文学',
    style: '史诗性反讽、艺术家困境、德国精神',
    characteristics: '对艺术家与资产阶级社会关系的深刻审视、反讽贯穿始终——既同情又批判的叙事姿态、宏大叙事中精准的心理细节描写、对德国精神与文化的持续探索与反思、古典音乐结构融入小说叙事、疾病/死亡/创造力之间的复杂关系',
    example: 'A man lives not only his personal life, as an individual, but also, consciously or unconsciously, the life of his epoch and his contemporaries.',
    exampleSource: '《魔山》',
    avoid: '避免回避反讽、避免简单叙事、避免脱离历史语境'
  },
  {
    id: 'bulgakov',
    name: '米哈伊尔·布尔加科夫',
    nameEn: 'Mikhail Bulgakov',
    region: '俄罗斯',
    era: '20世纪',
    category: '欧美文学',
    style: '魔幻讽刺、莫斯科寓言、大师与玛格丽特',
    characteristics: '撒旦降临莫斯科的魔幻现实主义开山之作、对苏联社会与官僚体制的尖锐讽刺、在极权环境下坚持创作的勇气与智慧、多线叙事——古代耶路撒冷与现代莫斯科的交织、荒诞与幽默中蕴含深刻的人性洞察、手稿不灭——对文学不朽力量的信仰',
    example: 'Manuscripts don\'t burn.',
    exampleSource: '《大师与玛格丽特》',
    avoid: '避免回避政治讽刺、避免线性叙事、避免温和表达'
  },
  {
    id: 'pushkin',
    name: '普希金',
    nameEn: 'Alexander Pushkin',
    region: '俄罗斯',
    era: '19世纪',
    category: '欧美文学',
    style: '俄罗斯诗歌的太阳、简洁明快、叙事诗',
    characteristics: '俄罗斯现代文学语言的奠基者与开创者、简洁明快的语言风格如阳光般清澈、叙事诗（诗体小说）的完美掌控、对自由与爱情的永恒歌颂、民间传说与文学传统的创造性融合、在浪漫主义中注入现实主义精神',
    example: 'Я вас любил: любовь еще, быть может...',
    exampleSource: '《我曾经爱过你》',
    avoid: '避免晦涩沉重、避免过度修饰、避免冷峻疏离'
  },
  {
    id: 'llosa',
    name: '马里奥·巴尔加斯·略萨',
    nameEn: 'Mario Vargas Llosa',
    region: '秘鲁',
    era: '当代',
    category: '拉美文学',
    style: '结构现实主义、多线叙事、政治书写',
    characteristics: '结构现实主义——多线叙事如同精密建筑、对秘鲁社会与政治的持续关注与书写、对话与叙述无缝切换的独特技法、时间与空间的自由跳跃如蒙太奇、对权力与暴力的深刻剖析、在文学技巧与政治关怀之间找到平衡',
    example: 'He was still too young to know that the heart\'s memory eliminates the bad and magnifies the good.',
    exampleSource: '《城市与狗》',
    avoid: '避免回避政治、避免简单叙事、避免单一视角'
  },
  {
    id: 'cortazar',
    name: '胡利奥·科塔萨尔',
    nameEn: 'Julio Cortázar',
    region: '阿根廷',
    era: '20世纪',
    category: '拉美文学',
    style: '游戏叙事、日常裂痕、爵士即兴',
    characteristics: '把小说变成一场与读者共同参与的游戏、在日常生活的表面发现裂缝与另一个世界、爵士乐般的即兴叙事节奏与结构、对现实主义与幻想的边界进行幽默解构、短篇小说形式的革命者与创新者、语言如爵士乐手般自由而精准',
    example: 'Andábamos sin buscarnos pero sabiendo que andábamos para encontrarnos.',
    exampleSource: '《跳房子》',
    avoid: '避免线性叙事、避免回避游戏、避免沉闷严肃'
  },
  {
    id: 'tagore',
    name: '泰戈尔',
    nameEn: 'Rabindranath Tagore',
    region: '印度',
    era: '近代',
    category: '亚洲文学',
    style: '灵性诗意、东方哲思、自然与爱',
    characteristics: '灵性与诗意的完美融合——如晨露般清澈、对自然万物的深情咏叹与人格化、东西方文化桥梁的建造者、爱与神性是贯穿始终的核心主题、简洁而富有哲理的语言风格、音乐与绘画等多重艺术形式的通感表达',
    example: '如果你因失去了太阳而流泪，那么你也将失去群星了。',
    exampleSource: '《飞鸟集》',
    avoid: '避免复杂晦涩、避免物质主义、避免回避灵性'
  },
  {
    id: 'hangang',
    name: '韩江',
    nameEn: 'Han Kang',
    region: '韩国',
    era: '当代',
    category: '亚洲文学',
    style: '植物性叙事、身体书写、暴力与美',
    characteristics: '以植物隐喻探索人类存在的边界与可能、对身体与暴力的冷静而深刻的书写、女性视角下对压抑与反抗的独特表达、简洁而富有诗意的语言张力、在日常与异常之间的微妙平衡、将韩国历史创伤转化为个人叙事',
    example: 'The feeling that she had never really been alive in this world caught her by surprise. It was a fact. She had never lived.',
    exampleSource: '《素食者》',
    avoid: '避免回避身体、避免传统叙事、避免温和表达'
  },
  {
    id: 'kimyoung',
    name: '金英夏',
    nameEn: 'Kim Young-ha',
    region: '韩国',
    era: '当代',
    category: '亚洲文学',
    style: '都市存在主义、黑色幽默、类型融合',
    characteristics: '韩国都市生活中的存在主义困境书写、黑色幽默与悬疑叙事的巧妙融合、对当代韩国社会问题的犀利观察、简洁利落的叙事节奏如电影剪辑、对死亡与暴力主题的冷静而深刻的处理、通俗性与文学性之间的平衡',
    example: 'I\'m a murderer. I\'m twenty-six years old. I\'m a college graduate. I\'m a son. I\'m a murderer.',
    exampleSource: '《我有破坏自己的权利》',
    avoid: '避免回避都市孤独、避免传统道德、避免温和叙事'
  },
  {
    id: 'achebe',
    name: '钦努阿·阿契贝',
    nameEn: 'Chinua Achebe',
    region: '尼日利亚',
    era: '20世纪',
    category: '非洲文学',
    style: '非洲视角、口述传统、殖民批判',
    characteristics: '从非洲内部视角讲述非洲故事的开创者、将伊博族口述传统融入现代小说叙事、对殖民主义及其文化后果的深刻批判、简洁而有力的英语中融入非洲语言节奏、在传统与现代的冲突中寻找平衡、用文学夺回被殖民叙事剥夺的话语权',
    example: 'The white man is very clever. He came quietly and peaceably with his religion. We were amused at his foolishness and allowed him to stay. Now he has won our brothers, and our clan can no longer act like one.',
    exampleSource: '《瓦解》',
    avoid: '避免西方中心视角、避免回避殖民议题、避免简化冲突'
  },
  {
    id: 'cervantes',
    name: '塞万提斯',
    nameEn: 'Miguel de Cervantes',
    region: '西班牙',
    era: '17世纪',
    category: '欧美文学',
    style: '元小说先河、理想与现实的碰撞、流浪汉小说',
    characteristics: '现代小说的开创者——堂吉诃德是文学史上第一个真正的小说人物、理想主义与现实世界的荒诞碰撞、元小说技法的先驱——虚构与真实的边界模糊、幽默与悲悯交织的叙事语调、流浪汉小说传统的集大成与超越、对人性弱点的深刻理解与温柔包容',
    example: 'El que lee mucho y anda mucho, ve mucho y sabe mucho.',
    exampleSource: '《堂吉诃德》',
    avoid: '避免回避理想主义、避免简单讽刺、避免扁平人物'
  },
  {
    id: 'ferrante',
    name: '埃莱娜·费兰特',
    nameEn: 'Elena Ferrante',
    region: '意大利',
    era: '当代',
    category: '欧美文学',
    style: '女性友谊、那不勒斯、匿名写作',
    characteristics: '对女性友谊的极致书写——爱恨交织的复杂情感、那不勒斯四部曲的史诗级女性成长叙事、匿名写作者身份带来的神秘感与纯粹性、对阶级与教育议题的深刻洞察、坦率而激烈的情感表达方式、在个人叙事中折射意大利社会变迁',
    example: 'We were twelve years old, but we walked along the streets of the hot city, the two of us, as if we were on the beach, on the sand, near the sea.',
    exampleSource: '《我的天才女友》',
    avoid: '避免回避女性经验、避免温和表达、避免男性中心叙事'
  },
  {
    id: 'szymborska',
    name: '维斯拉瓦·辛波斯卡',
    nameEn: 'Wisława Szymborska',
    region: '波兰',
    era: '20世纪',
    category: '欧美文学',
    style: '日常哲思、反讽轻盈、以小见大',
    characteristics: '从日常生活的微小事物中提炼哲学洞见、轻盈而精准的反讽语调如手术刀、以"我不知道"作为思考的起点而非终点、对偶然性与存在的好奇与惊叹、诗歌形式简洁而内涵丰富如俳句、幽默中蕴含对人类的深切关怀',
    example: 'I prefer the hell of chaos to the hell of order.',
    exampleSource: '《种种可能》',
    avoid: '避免宏大宣言、避免沉重晦涩、避免回避日常'
  }
];

// ========== 预设模板数据 ==========
const presets = {
  xiaohongshu: {
    styleName: '小红书种草风',
    tone: '轻松活泼',
    audience: '年轻女性、购物爱好者',
    contentType: '社交媒体帖子',
    characteristics: '大量使用emoji表情、口语化表达、第一人称视角、感叹号收尾、突出个人体验感',
    avoid: '避免正式书面语、避免长段落、避免说教感'
  },
  academic: {
    styleName: '学术论文风',
    tone: '正式严谨',
    audience: '学者、研究人员',
    contentType: '学术论文',
    characteristics: '客观陈述、逻辑严密、引用规范、避免主观判断、使用专业术语',
    avoid: '避免口语化表达、避免夸张修辞、避免第一人称（视学科而定）'
  },
  storytelling: {
    styleName: '故事叙述风',
    tone: '温暖治愈',
    audience: '大众读者',
    contentType: '小说创作',
    characteristics: '画面感强、细节描写丰富、情感真挚、节奏张弛有度、善用比喻和通感',
    avoid: '避免平铺直叙、避免说教、避免过度抽象'
  },
  marketing: {
    styleName: '营销文案风',
    tone: '犀利幽默',
    audience: '潜在消费者',
    contentType: '产品文案',
    characteristics: '抓住用户痛点、突出产品卖点、制造紧迫感、强有力的行动号召（CTA）、短句为主',
    avoid: '避免冗长介绍、避免技术术语堆砌、避免模糊表达'
  }
};

// ========== DOM 元素 ==========
const elements = {
  styleName: document.getElementById('styleName'),
  tone: document.getElementById('tone'),
  audience: document.getElementById('audience'),
  contentType: document.getElementById('contentType'),
  characteristics: document.getElementById('characteristics'),
  reference: document.getElementById('reference'),
  avoid: document.getElementById('avoid'),
  generateBtn: document.getElementById('generateBtn'),
  outputContent: document.getElementById('outputContent'),
  copyBtn: document.getElementById('copyBtn'),
  downloadBtn: document.getElementById('downloadBtn'),
  toast: document.getElementById('toast'),
  presetsGrid: document.getElementById('presetsGrid'),
  authorSearch: document.getElementById('authorSearch'),
  authorRegion: document.getElementById('authorRegion'),
  authorGrid: document.getElementById('authorGrid'),
  authorCount: document.getElementById('authorCount')
};

// ========== 工具函数 ==========
function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  clearTimeout(elements.toast._timeout);
  elements.toast._timeout = setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 2000);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ========== 作家卡片渲染 ==========
function getCategory(author) {
  if (author.category) return author.category;
  const region = author.region;
  if (region === '中国') return '中国文学';
  if (region === '日本') return '日本文学';
  if (['美国', '英国', '法国', '德国', '俄罗斯', '爱尔兰', '意大利', '波兰', '西班牙'].includes(region)) return '欧美文学';
  if (['秘鲁', '阿根廷', '哥伦比亚'].includes(region)) return '拉美文学';
  if (['印度', '韩国'].includes(region)) return '亚洲文学';
  if (['尼日利亚'].includes(region)) return '非洲文学';
  if (region === '国际') return '欧美文学';
  return '欧美文学';
}

function getRegionClass(author) {
  if (author.category) {
    if (author.category === '平台文风') return 'region-platform';
    if (author.category === '影视动漫') return 'region-anime';
  }
  const region = author.region;
  if (region === '中国') return 'region-cn';
  if (region === '日本') return 'region-jp';
  if (['美国', '英国', '爱尔兰'].includes(region)) return 'region-intl';
  if (['法国', '德国', '意大利', '西班牙', '波兰', '俄罗斯'].includes(region)) return 'region-eu';
  if (['秘鲁', '阿根廷', '哥伦比亚'].includes(region)) return 'region-latam';
  if (['印度', '韩国'].includes(region)) return 'region-asia';
  if (['尼日利亚'].includes(region)) return 'region-africa';
  return 'region-intl';
}

function getRegionLabel(author) {
  if (author.category) return author.category;
  return author.region;
}

function renderAuthors(filterText, filterCategory) {
  let filtered = authors;

  if (filterText) {
    const lower = filterText.toLowerCase();
    filtered = filtered.filter(a =>
      a.name.includes(filterText) ||
      a.nameEn.toLowerCase().includes(lower) ||
      a.style.includes(filterText) ||
      a.characteristics.includes(filterText) ||
      a.era.includes(filterText) ||
      (a.region && a.region.includes(filterText))
    );
  }

  if (filterCategory && filterCategory !== 'all') {
    filtered = filtered.filter(a => getCategory(a) === filterCategory);
  }

  elements.authorCount.textContent = filtered.length;

  if (filtered.length === 0) {
    elements.authorGrid.innerHTML = '<div class="author-empty">没有找到匹配的作家</div>';
    return;
  }

  elements.authorGrid.innerHTML = filtered.map(a => `
    <div class="author-card" data-author-id="${a.id}">
      <div class="author-card-header">
        <span class="author-name">${escapeHtml(a.name)}</span>
        <span class="author-region ${getRegionClass(a)}">${escapeHtml(getRegionLabel(a))}</span>
      </div>
      <div class="author-meta">${escapeHtml(a.nameEn)} · ${escapeHtml(a.era)}</div>
      <div class="author-style">${escapeHtml(a.style)}</div>
      <div class="author-chars">${escapeHtml(a.characteristics)}</div>
      <div class="author-example">
        <div class="author-example-label">代表片段</div>
        <div class="author-example-text">"${escapeHtml(a.example)}"</div>
        <div class="author-example-source">—— ${escapeHtml(a.exampleSource)}</div>
      </div>
    </div>
  `).join('');
}

// ========== 初始化作家库 ==========
function initAuthorLibrary() {
  renderAuthors('', 'all');
}

// ========== 作家搜索与筛选 ==========
elements.authorSearch.addEventListener('input', function() {
  renderAuthors(this.value.trim(), elements.authorRegion.value);
});

elements.authorRegion.addEventListener('change', function() {
  renderAuthors(elements.authorSearch.value.trim(), this.value);
});

// ========== 点击作家卡片 ==========
elements.authorGrid.addEventListener('click', function(e) {
  const card = e.target.closest('.author-card');
  if (!card) return;

  const authorId = card.dataset.authorId;
  const author = authors.find(a => a.id === authorId);
  if (!author) return;

  // 填充表单
  elements.styleName.value = `${author.name}文风`;
  elements.tone.value = '';
  elements.audience.value = '';
  elements.contentType.value = '小说创作';
  elements.characteristics.value = author.characteristics;
  elements.reference.value = `"${author.example}" —— ${author.exampleSource}`;
  elements.avoid.value = author.avoid;

  // 滚动到顶部
  document.querySelector('.input-panel').scrollIntoView({ behavior: 'smooth' });

  // 高亮卡片
  document.querySelectorAll('.author-card.active').forEach(c => c.classList.remove('active'));
  card.classList.add('active');

  showToast(`已选中「${author.name}」文风`);
  generateInstruction();
});

// ========== 生成指令 ==========
function generateInstruction() {
  const styleName = elements.styleName.value.trim();
  if (!styleName) {
    showToast('请至少填写风格名称');
    elements.styleName.focus();
    return;
  }

  const data = {
    styleName,
    tone: elements.tone.value,
    audience: elements.audience.value.trim(),
    contentType: elements.contentType.value,
    characteristics: elements.characteristics.value.trim(),
    reference: elements.reference.value.trim(),
    avoid: elements.avoid.value.trim()
  };

  const html = buildInstructionHTML(data);
  elements.outputContent.innerHTML = html;
  elements.outputContent.scrollTop = 0;

  // 滚动到输出区（移动端）
  if (window.innerWidth <= 768) {
    elements.outputContent.scrollIntoView({ behavior: 'smooth' });
  }
}

function buildInstructionHTML(data) {
  let html = '';

  html += `<div class="instruction-block">`;
  html += `<h3>文风指令：${escapeHtml(data.styleName)}</h3>`;
  html += `<p>请按照以下写作风格指令进行内容创作：</p>`;
  html += `</div>`;

  html += `<div class="instruction-block">`;
  html += `<h3>一、风格定义</h3>`;
  html += `<p>你是一位擅长「${escapeHtml(data.styleName)}」风格的写作者。</p>`;
  if (data.tone) {
    html += `<p>整体语气基调为<strong>${escapeHtml(data.tone)}</strong>。</p>`;
  }
  if (data.contentType) {
    html += `<p>内容类型为<strong>${escapeHtml(data.contentType)}</strong>。</p>`;
  }
  html += `</div>`;

  if (data.audience) {
    html += `<div class="instruction-block">`;
    html += `<h3>二、目标受众</h3>`;
    html += `<p>面向<strong>${escapeHtml(data.audience)}</strong>进行写作，使用他们熟悉的语言风格和表达方式。</p>`;
    html += `</div>`;
  }

  if (data.characteristics) {
    const items = data.characteristics.split(/[,，、；;]/).filter(s => s.trim());
    html += `<div class="instruction-block">`;
    html += `<h3>${data.audience ? '三' : '二'}、写作特征</h3>`;
    html += `<ul>`;
    items.forEach(item => {
      html += `<li>${escapeHtml(item.trim())}</li>`;
    });
    html += `</ul>`;
    html += `</div>`;
  }

  let sectionNum = 1;
  if (data.audience) sectionNum++;
  if (data.characteristics) sectionNum++;

  if (data.reference) {
    html += `<div class="instruction-block">`;
    html += `<h3>${toChineseNum(sectionNum)}、参考范例</h3>`;
    html += `<p>请模仿以下文本的风格和语调：</p>`;
    html += `<blockquote style="background:#f3f4f6;padding:12px 16px;border-left:3px solid #6366f1;border-radius:0 8px 8px 0;margin:8px 0;color:#4b5563;font-style:italic;">${escapeHtml(data.reference)}</blockquote>`;
    html += `</div>`;
    sectionNum++;
  }

  if (data.avoid) {
    const items = data.avoid.split(/[,，、；;]/).filter(s => s.trim());
    html += `<div class="instruction-block">`;
    html += `<h3>${toChineseNum(sectionNum)}、避免事项</h3>`;
    html += `<ul>`;
    items.forEach(item => {
      html += `<li>${escapeHtml(item.trim())}</li>`;
    });
    html += `</ul>`;
    html += `</div>`;
  }

  return html;
}

function toChineseNum(n) {
  const map = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  if (n <= 9) return map[n];
  return String(n);
}

// ========== 复制功能 ==========
function copyOutput() {
  const content = elements.outputContent;
  if (content.querySelector('.placeholder')) {
    showToast('没有可复制的内容');
    return;
  }

  const text = content.innerText;
  navigator.clipboard.writeText(text).then(() => {
    showToast('已复制到剪贴板');
  }).catch(() => {
    showToast('复制失败，请手动选择');
  });
}

// ========== 下载功能 ==========
function downloadOutput() {
  const content = elements.outputContent;
  if (content.querySelector('.placeholder')) {
    showToast('没有可下载的内容');
    return;
  }

  const text = content.innerText;
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `文风指令_${elements.styleName.value.trim() || '未命名'}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('下载成功');
}

// ========== 预设模板 ==========
function applyPreset(presetKey) {
  const preset = presets[presetKey];
  if (!preset) return;

  elements.styleName.value = preset.styleName;
  elements.tone.value = preset.tone;
  elements.audience.value = preset.audience || '';
  elements.contentType.value = preset.contentType || '';
  elements.characteristics.value = preset.characteristics || '';
  elements.avoid.value = preset.avoid || '';
  elements.reference.value = '';

  showToast(`已加载「${preset.styleName}」模板`);
  generateInstruction();
}

// ========== 事件绑定 ==========
elements.generateBtn.addEventListener('click', generateInstruction);

document.querySelectorAll('.input-panel input[type="text"]').forEach(input => {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      generateInstruction();
    }
  });
});

elements.copyBtn.addEventListener('click', copyOutput);
elements.downloadBtn.addEventListener('click', downloadOutput);

elements.presetsGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.preset-card');
  if (card) {
    applyPreset(card.dataset.preset);
  }
});

// ========== 键盘快捷键 ==========
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    generateInstruction();
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
    e.preventDefault();
    copyOutput();
  }
});

// ========== 初始化 ==========
initAuthorLibrary();