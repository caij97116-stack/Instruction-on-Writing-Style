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
function renderAuthors(filterText, filterRegion) {
  let filtered = authors;

  if (filterText) {
    const lower = filterText.toLowerCase();
    filtered = filtered.filter(a =>
      a.name.includes(filterText) ||
      a.nameEn.toLowerCase().includes(lower) ||
      a.style.includes(filterText) ||
      a.characteristics.includes(filterText) ||
      a.era.includes(filterText)
    );
  }

  if (filterRegion && filterRegion !== 'all') {
    filtered = filtered.filter(a => a.region === filterRegion);
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
        <span class="author-region ${a.region === '中国' ? 'region-cn' : a.region === '日本' ? 'region-jp' : 'region-intl'}">${escapeHtml(a.region)}</span>
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