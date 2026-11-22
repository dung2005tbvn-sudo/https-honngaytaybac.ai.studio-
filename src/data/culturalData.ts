export interface Province {
  id: string;
  name: string;
  capital: string;
  areaKm2: number;
  ethnicGroups: string[];
  keyLandmark: string;
  secondaryLandmark: string;
  tagline: string;
  description: string;
  culturalHighlights: string[];
  signatureDish: string;
  craftHeritage: string;
  coordinates: { x: number; y: number; labelX: number; labelY: number };
  badgeColor: string;
  heroHighlight: string;
}

export interface CulturalItem {
  id: string;
  name: string;
  ethnicGroup: string;
  badge: string;
  summary: string;
  details: string;
  characteristics: string[];
  materials?: string;
  culturalMeaning: string;
  region: string;
  imageUrl?: string;
}

export interface CulturalPillar {
  id: string;
  title: string;
  tag: string;
  subtitle: string;
  overview: string;
  artisanQuote: string;
  authorQuote: string;
  heroImage: string;
  items: CulturalItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'costume' | 'cuisine' | 'festival' | 'landscape';
  categoryLabel: string;
  ethnic: string;
  location: string;
  description: string;
  imageUrl: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  culturalFact: string;
}
import heroImageFile from '../assets/images/hero_taybac_mountains_1793881050195.jpg';
import costumeImageFile from '../assets/images/ethnic_costume_textile_1793881051675.jpg';
import cuisineImageFile from '../assets/images/cuisine_papinhtop_dish_1793881051570.jpg';
import festivalImageFile from '../assets/images/festival_xoe_dance_1793881052147.jpg';

export const HERO_IMAGE = heroImageFile || '/images/hero.jpg';
export const COSTUME_IMAGE = costumeImageFile || '/images/costume.jpg';
export const CUISINE_IMAGE = cuisineImageFile || '/images/cuisine.jpg';
export const FESTIVAL_IMAGE = festivalImageFile || '/images/festival.jpg';

export const PROVINCES: Province[] = [
  {
    id: 'dien-bien',
    name: 'Điện Biên',
    capital: 'Thành phố Điện Biên Phủ',
    areaKm2: 9541,
    ethnicGroups: ['Thái (53%)', 'Mông (34%)', 'Kinh', 'Khơ Mú', 'Kháng', 'Hà Nhì'],
    keyLandmark: 'Quần thể Di tích Lịch sử Điện Biên Phủ & Đèo Pha Đin',
    secondaryLandmark: 'Cánh đồng Mường Thanh & Bản Pá Ngán',
    tagline: 'Đất Sử Hùng Thiêng – Mùa Hoa Ban Trắng',
    description: 'Thung lũng Mường Thanh trù phú lớn nhất miền Tây Bắc, nơi lưu dấu mốc son lịch sử lẫy lừng năm châu và ngập tràn sắc trắng tinh khôi của hoa ban mùa hội xuân.',
    culturalHighlights: [
      'Hội Hoa Ban tháng 3 rộn rã câu khắp Thái',
      'Đèo Pha Đin - một trong "Tứ đại đỉnh đèo" Việt Nam',
      'Nghệ thuật thêu hoa văn khăn Piêu và váy cạp Thái Đen'
    ],
    signatureDish: 'Thịt trâu sấy gác bếp Mường Lay, Chẩm chéo rừng, Rêu đá suối nướng',
    craftHeritage: 'Nghề dệt thổ cẩm truyền thống bản Na Sang, mây tre đan Huyện Điện Biên',
    coordinates: { x: 120, y: 240, labelX: 110, labelY: 265 },
    badgeColor: '#A43B21',
    heroHighlight: 'Mường Thanh đệ nhất cánh đồng vùng cao'
  },
  {
    id: 'lai-chau',
    name: 'Lai Châu',
    capital: 'Thành phố Lai Châu',
    areaKm2: 9068,
    ethnicGroups: ['Thái (32%)', 'Mông (23%)', 'Dao (13%)', 'Hà Nhì', 'Giáy', 'La Hủ'],
    keyLandmark: 'Đỉnh Pu Si Lung & Đèo Ô Quy Hồ (Cổng Trời)',
    secondaryLandmark: 'Cao nguyên mây Sìn Hồ & Bản Sin Suối Hồ',
    tagline: 'Vương Quốc Thác Mây – Những Bản Làng Trong Sương',
    description: 'Vùng đất địa đầu non cao với những đỉnh núi hùng vĩ chạm tầng mây, những con đèo vắt ngang lưng trời cùng nét bí ẩn nguyên sơ của người Dao Khâu, Hà Nhì.',
    culturalHighlights: [
      'Tục vẽ sáp ong trên vải lanh của đồng bào Mông Hoa',
      'Lễ hội Gạ Ma Thú cúng bản người Hà Nhì ở Ka Lăng - Thu Lũm',
      'Chợ phiên San Thàng rộn rã sắc màu váy áo Dao Đỏ'
    ],
    signatureDish: 'Lợn cắp nách nướng lá móc mật, Nộm rau dớn suối rừng, Cá bống vùi tro',
    craftHeritage: 'Nghề làm thảo quả, đan ghế mây Bản Bo, se lanh dệt thổ cẩm Sin Suối Hồ',
    coordinates: { x: 210, y: 110, labelX: 200, labelY: 90 },
    badgeColor: '#19432B',
    heroHighlight: 'Pu Si Lung hùng vĩ & Đèo mây Ô Quy Hồ'
  },
  {
    id: 'son-la',
    name: 'Sơn La',
    capital: 'Thành phố Sơn La',
    areaKm2: 14123,
    ethnicGroups: ['Thái (54%)', 'Kinh', 'Mông (15%)', 'Mường (8%)', 'Dao', 'Xinh Mun'],
    keyLandmark: 'Cao nguyên Mộc Châu & Đồi chè Trái Tim',
    secondaryLandmark: 'Thác Dải Yếm & Vùng Lòng hồ Thủy điện Sơn La',
    tagline: 'Cái Nôi Múa Xòe – Cao Nguyên Xanh Biếc Bốn Mùa',
    description: 'Tỉnh có diện tích lớn thứ ba cả nước, cái nôi của nghệ thuật Múa Xòe Thái Di sản Nhân loại UNESCO, nổi danh cùng thảo nguyên cỏ ngọt ngào và đồi chè biếc ngát hương.',
    culturalHighlights: [
      'Nghệ thuật Xòe Thái được UNESCO ghi danh Di sản Nhân loại',
      'Lễ hội Hết Chá tri ân thầy cúng người Thái ở Mộc Châu',
      'Không gian văn hoá bản Lác, bản Búa rực rỡ sắc cúc bướm áo Cỏm'
    ],
    signatureDish: 'Pa Pỉnh Tộp (Cá nướng gập hạt dổi mắc khén), Nậm pịa cay đắng, Bê chao Mộc Châu',
    craftHeritage: 'Nghề thêu thổ cẩm hoa văn cạp váy, làm nhạc cụ đàn Tính tẩu Mai Sơn',
    coordinates: { x: 260, y: 310, labelX: 280, labelY: 340 },
    badgeColor: '#1C355E',
    heroHighlight: 'Cái nôi Nghệ thuật Xòe Thái & Cao nguyên Mộc Châu'
  },
  {
    id: 'hoa-binh',
    name: 'Hòa Bình',
    capital: 'Thành phố Hòa Bình',
    areaKm2: 4590,
    ethnicGroups: ['Mường (63%)', 'Kinh (28%)', 'Thái (4%)', 'Tày', 'Dao', 'H\'Mông'],
    keyLandmark: 'Thung lũng Mai Châu thanh bình & Lòng hồ Sông Đà',
    secondaryLandmark: 'Bản Lác Mai Châu & Không gian Mo Mường',
    tagline: 'Cái Nôi Văn Hoá Mường – Tiếng Cồng Ngân Sông Đà',
    description: 'Cửa ngõ Tây Bắc rực rỡ bản sắc văn hoá người Mường với sử thi Đẻ đất Đẻ nước, di sản Mo Mường cổ truyền và tiếng cồng chiêng ngân vang bên dòng sông Đà huyền thoại.',
    culturalHighlights: [
      'Di sản Mo Mường cổ truyền và nghệ thuật Cồng Chiêng 12 chiếc',
      'Lễ hội Khai hạ Mường Bi cầu mùa xuân đầm ấm',
      'Kiến trúc nhà sàn gỗ 4 mái rợp mát thung lũng Mai Châu'
    ],
    signatureDish: 'Cơm lam nướng thơm ngọt hạt nếp nương, Thịt lợn muối chua nậm, Canh loóng chuối rừng',
    craftHeritage: 'Nghề dệt cạp váy Mường độc nhất vô nhị, đan lát mây tre giang Kỳ Sơn',
    coordinates: { x: 380, y: 360, labelX: 410, labelY: 380 },
    badgeColor: '#C88327',
    heroHighlight: 'Sử thi Đẻ đất Đẻ nước & Mo Mường huyền thoại'
  },
  {
    id: 'yen-bai',
    name: 'Yên Bái',
    capital: 'Thành phố Yên Bái',
    areaKm2: 6886,
    ethnicGroups: ['Kinh', 'Tày (18%)', 'Dao (11%)', 'Mông (11%)', 'Thái', 'Mường'],
    keyLandmark: 'Ruộng bậc thang Mù Cang Chải (Di tích Quốc gia Đặc biệt)',
    secondaryLandmark: 'Hồ Thác Bà "Hạ Long trên núi" & Chè cổ thụ Suối Giàng',
    tagline: 'Nấc Thang Thiên Đường – Bạt Ngàn Chè Shan Tuyết',
    description: 'Những nấc thang ruộng bậc thang kỳ vĩ được bàn tay đồng bào Mông kiến tạo qua hàng trăm năm, hòa cùng biển chè Shan tuyết cổ thụ nghìn năm tuổi bồng bềnh trong mây trắng.',
    culturalHighlights: [
      'Danh thắng Ruộng bậc thang Mù Cang Chải mùa nước đổ & mùa lúa chín vàng',
      'Lễ Cấp Sắc truyền thống tôn vinh người đàn ông Dao Đỏ',
      'Hội Xòe Then của người Tày bên dòng suối Thia Nghĩa Lộ'
    ],
    signatureDish: 'Cốm nếp Tú Lệ thơm dẻo trứ danh, Măng sặt xào lòng gà xé, Rượu thóc La Pán Tẩn',
    craftHeritage: 'Nghề rèn nông cụ thủ công người Mông, nghề sao chè Shan tuyết bí truyền Suối Giàng',
    coordinates: { x: 310, y: 200, labelX: 330, labelY: 180 },
    badgeColor: '#A43B21',
    heroHighlight: 'Kỳ quan Mù Cang Chải & Cốm ngọc Tú Lệ'
  },
  {
    id: 'lao-cai',
    name: 'Lào Cai',
    capital: 'Thành phố Lào Cai',
    areaKm2: 6364,
    ethnicGroups: ['Kinh', 'H\'Mông (22%)', 'Dao (14%)', 'Tày (15%)', 'Giáy', 'Hà Nhì'],
    keyLandmark: 'Đỉnh Fansipan 3.143m – Nóc nhà Đông Dương & Sa Pa thị xã sương mù',
    secondaryLandmark: 'Chợ phiên Bắc Hà rực rỡ thổ cẩm & Thung lũng Mường Hoa',
    tagline: 'Nóc Nhà Đông Dương – Sắc Màu Chợ Phiên Vùng Cao',
    description: 'Trung tâm hội tụ kỳ vĩ giữa đỉnh Fansipan huyền thoại, thị xã sương mù Sa Pa mơ màng và chợ phiên Bắc Hà náo nức âm vang khèn Mông, tiếng ngựa lọc cọc xuống chợ.',
    culturalHighlights: [
      'Chợ phiên Bắc Hà họp chủ nhật - bản hòa ca trang phục thổ cẩm rực rỡ nhất Đông Dương',
      'Lễ hội Gầu Tào cầu phúc, cầu mệnh của người H\'Mông',
      'Nghệ thuật tắm lá thuốc người Dao Đỏ bản Tả Phìn'
    ],
    signatureDish: 'Thắng cố ngựa Bắc Hà nghi ngút khói, Rượu ngô men lá Bản Phố, Cá hồi Sa Pa',
    craftHeritage: 'Nghề tráng bạc thủ công người Dao, thêu dệt thổ cẩm sợi gai bản Tả Van',
    coordinates: { x: 260, y: 50, labelX: 290, labelY: 40 },
    badgeColor: '#1C355E',
    heroHighlight: 'Nóc nhà Fansipan 3.143m & Chợ phiên Bắc Hà'
  }
];

export const CULTURAL_PILLARS: CulturalPillar[] = [
  {
    id: 'trang-phuc',
    title: 'Trang Phục & Thổ Cẩm',
    tag: 'Sắc Phục Bản Mường',
    subtitle: 'Ngôn ngữ của sợi chỉ, sáp ong và hoa văn cội nguồn',
    overview: 'Mỗi nét hoa văn trên từng tấm thổ cẩm Tây Bắc không đơn thuần là trang trí, mà là cuốn sử thi sống động ghi dấu lịch sử thiên di, quan niệm vũ trụ và tình yêu thiết tha với cỏ cây sông suối.',
    artisanQuote: 'Con gái Thái từ thuở lên mười đã biết cầm thoi đưa sợi; con gái Mông từ bé đã tập chấm sáp ong vẽ hoa văn. Váy áo thêu xong là gửi gắm cả tuổi xuân và tấm lòng thủy chung về nhà chồng.',
    authorQuote: 'Nghệ nhân Lò Thị Mai – Bản Pom Coong',
    heroImage: COSTUME_IMAGE,
    items: [
      {
        id: 'ao-com-thai',
        name: 'Áo Cỏm & Hàng Cúc Bướm Bạc',
        ethnicGroup: 'Dân tộc Thái (Thái Trắng & Thái Đen)',
        badge: 'Di sản trang phục',
        summary: 'Tôn vinh trọn vẹn đường cong thanh thoát và nét duyên kín đáo của thiếu nữ miền Tây Bắc.',
        details: 'Áo Cỏm may vừa khít eo lưng, cổ áo khoét hình trái tim hay cổ đứng thấp, nổi bật ở hàng cúc bướm bằng bạc lấp lánh (mạk bém) tượng trưng cho âm dương hòa hợp. Kết hợp cùng váy vải đen dài chấm gót và thắt lưng xanh (xài èo) buông nhẹ duyên dáng, đi kèm chiếc khăn Piêu thêu hoa văn chỉ màu công phu che chở mái tóc bới tằng cẩu.',
        characteristics: [
          'Hàng khuy bạc hình con bướm, ve sầu, bông hoa tượng trưng cho sự sinh sôi',
          'Váy xẻ gấu nhẹ bằng vải chàm đen tuyền tôn dáng lưng ong',
          'Khăn Piêu thêu hoa văn móc câu, sao tám cánh mang thông điệp tình duyên'
        ],
        materials: 'Vải lụa mềm hoặc đũi tự dệt, cúc bạc ta chạm khắc thủ công, chỉ tơ nhuộm màu cây rừng.',
        culturalMeaning: 'Biểu tượng của đức hạnh, sự khéo léo và nét dịu dàng thuần hậu của người con gái Thái.',
        region: 'Sơn La, Điện Biên, Lai Châu, Yên Bái'
      },
      {
        id: 'vay-xoe-hmong',
        name: 'Váy Xòe Thổ Cẩm & Kỹ Thuật Vẽ Sáp Ong',
        ethnicGroup: 'Dân tộc H\'Mông (Mông Hoa, Mông Đen, Mông Đỏ)',
        badge: 'Di sản thủ công',
        summary: 'Kiệt tác hội tụ kỹ thuật vẽ sáp ong tinh xảo, dệt sợi lanh bền bỉ và xếp nếp sóng sánh.',
        details: 'Chiếc váy xòe người Mông được tạo nên từ hàng chục mét vải lanh tự dệt. Nghệ nhân dùng bút vẽ đồng nóng chảy chứa sáp ong rừng chấm từng nét kỷ hà học hình ốc, cánh hoa, núi non lên mặt vải rồi mới đem nhuộm chàm nhiều lần. Khi luộc nước sôi, sáp ong tan chảy để lại những vệt hoa văn trắng tinh khôi tương phản kỳ ảo trên nền chàm sẫm.',
        characteristics: [
          'Hàng trăm nếp gấp xếp ly thủ công khi bước đi như bông hoa đung đưa theo gió',
          'Kỹ thuật vẽ sáp ong hình học đối xứng tuyệt đối không cần thước đo',
          'Khuyên tai và vòng cổ bạc lớn phát ra âm thanh lách cách rộn rã khi múa'
        ],
        materials: 'Sợi cây lanh tự nhiên, sáp ong rừng nguyên chất, chàm lá dại, chỉ tơ tằm nhuộm thảo mộc.',
        culturalMeaning: 'Ghi nhớ công ơn tổ tiên vỡ đất, bản lĩnh vượt qua ngàn đèo gió tuyết giữ gìn tổ ấm.',
        region: 'Lào Cai, Lai Châu, Yên Bái, Điện Biên'
      },
      {
        id: 'trang-phuc-dao-do',
        name: 'Sắc Đỏ Rực Lửa & Khăn Mũ Đội Đầu Người Dao',
        ethnicGroup: 'Dân tộc Dao (Dao Đỏ & Dao Khâu)',
        badge: 'Bản sắc dân tộc',
        summary: 'Gam màu đỏ rực rỡ như ngọn lửa sưởi ấm mùa đông lạnh buốt lưng chừng mây.',
        details: 'Phụ nữ Dao Đỏ nổi bật với chiếc khăn vuông màu đỏ thêu hoa văn quả trám xếp tầng trên đầu hoặc mũ trùm kết quả bông len xù đỏ tươi. Trước ngực áo đính chùm lục lạc và chuỗi quả bông rực lửa tượng trưng cho may mắn, phúc lộc và xua đuổi tà khí giữa rừng già hoang vu.',
        characteristics: [
          'Quả bông đỏ đung đưa trước ngực và tua rua khăn đỏ rực rỡ',
          'Họa tiết thêu chữ vạn, cây thông, chân chim, mắt chim công bằng chỉ ngũ sắc',
          'Trang sức bạc chạm nổi hình mặt trời và các vị thần che chở'
        ],
        materials: 'Vải chàm đen nhuộm kỹ, len đỏ, bạc trắng nguyên chất, hạt cườm thuỷ tinh.',
        culturalMeaning: 'Màu đỏ của sự sống, ngọn lửa giữ ấm bản làng và niềm tự hào về cội nguồn Bàn Vương.',
        region: 'Lào Cai, Yên Bái, Lai Châu'
      }
    ]
  },
  {
    id: 'am-thuc',
    title: 'Ẩm Thực Vùng Cao',
    tag: 'Hương Vị Nắng Gió',
    subtitle: 'Hòa quyện tinh hoa rừng thẳm với hạt mắc khén và hạt dổi cay nồng',
    overview: 'Ẩm thực Tây Bắc không cầu kỳ nguyên liệu đắt tiền mà trân trọng nguồn lộc ban từ núi rừng hoang sơ: cá suối tươi rói, măng non trên đèo, mắc khén thơm như vỏ quýt rừng hòa cùng vị khói củi đượm nồng.',
    artisanQuote: 'Ăn miếng cá nướng Pa Pỉnh Tộp, nhấp ngụm rượu ngô men lá, thấy cả hơi sương Fansipan hay mùi khói bếp bản Mường thấm vào tận cuống họng.',
    authorQuote: 'Già làng Vàng A Chơ – Huyện Mù Cang Chải',
    heroImage: CUISINE_IMAGE,
    items: [
      {
        id: 'thit-trau-gac-bep',
        name: 'Thịt Trâu Gác Bếp Mường Khói',
        ethnicGroup: 'Dân tộc Thái & Khơ Mú',
        badge: 'Đặc sản trứ danh',
        summary: 'Thớ thịt đỏ sậm đượm vị khói củi, cay nồng ớt chỉ thiên và thơm ngát hương hạt dổi.',
        details: 'Chọn phần bắp thịt trâu tươi ngon nhất, lọc bỏ gân, thái bản dài dọc thớ rồi tẩm ướp cùng hạt mắc khén rang xay, hạt dổi nướng, ớt rừng, gừng giã nát và muối hạt. Thịt được xiên que tre rồi treo trên giàn gác bếp củi ngày đêm. Khói từ bếp lửa củi đượm hun thịt khô dần một cách tự nhiên, giữ trọn vẹn vị ngọt đậm bên trong thớ thịt.',
        characteristics: [
          'Vỏ ngoài nâu đen khô giòn, bên trong thớ thịt hồng tươi mềm ngọt',
          'Hương khói củi nhãn, củi dẻ đặc trưng quyện vị the mát của mắc khén',
          'Xé nhỏ chấm chẩm chéo ướt hay vắt chanh nhắm cùng rượu men lá'
        ],
        materials: 'Thịt bắp trâu núi, hạt mắc khén, hạt dổi rừng, ớt nướng, tỏi tía suối.',
        culturalMeaning: 'Món ăn dự trữ mùa đông giá rét thể hiện trí tuệ thích ứng của cư dân vùng cao.',
        region: 'Điện Biên, Sơn La, Lai Châu'
      },
      {
        id: 'pa-pinh-top',
        name: 'Pa Pỉnh Tộp (Cá Suối Nướng Gập)',
        ethnicGroup: 'Dân tộc Thái',
        badge: 'Món ăn linh hồn',
        summary: 'Cá chép, trôi nướng gập đôi trên than củi hồng cùng thảo dược núi rừng thơm nức mũi.',
        details: 'Trong tiếng Thái, "Pa" là cá, "Pỉnh" là nướng, "Tộp" là gập lại. Cá tươi được mổ dọc sống lưng chứ không mổ bụng để giữ trọn lớp mỡ béo ngậy. Bên trong nhồi đầy mắc khén, lá dổi rừng, hành tỏi xắt nhỏ, rau thì là và húng dại. Sau đó gập cá lại từ đầu đến đuôi, kẹp chặt bằng thanh nẹp tre tươi và nướng từ từ trên than củi đỏ rực.',
        characteristics: [
          'Vảy cá giòn rụm màu vàng ruộm, thịt cá ngọt đậm không tanh',
          'Gia vị nhồi tẩm tỏa mùi hương thảo mộc nồng nàn lan xa khắp gian nhà',
          'Dùng tay gỡ từng miếng ăn kèm xôi nếp nương dẻo quánh'
        ],
        materials: 'Cá suối tự nhiên hoặc cá chép ao đá, gia vị mắc khén, mầm măng cay, thanh nẹp tre rừng.',
        culturalMeaning: 'Món ăn danh dự dành riêng đãi khách quý, bày tỏ tấm lòng hiếu khách chân tình của gia chủ.',
        region: 'Sơn La, Điện Biên, Lai Châu'
      },
      {
        id: 'xoi-ngu-sac',
        name: 'Xôi Ngũ Sắc Tinh Hoa Đất Trời',
        ethnicGroup: 'Dân tộc Thái, Tày, Dao',
        badge: 'Ẩm thực lễ hội',
        summary: 'Năm màu sắc rực rỡ tượng trưng cho ngũ hành, được nhuộm hoàn toàn bằng thảo mộc tự nhiên.',
        details: 'Xôi đồ bằng gạo nếp nương hạt tròn mẩy, ngâm nhuộm bằng các loại lá cây rừng bí truyền: màu đỏ từ lá cẩm đỏ, màu tím từ lá cẩm tím, màu vàng từ củ nghệ hoặc hoa bột mần, màu xanh từ lá gừng hoặc lá cơm xôi, màu trắng nguyên bản của nếp nương tinh khiết. Đồ xôi trong chõ gỗ chõ đồ truyền thống giúp hạt xôi dẻo dai dù để nguội nhiều ngày.',
        characteristics: [
          'Màu sắc óng ả tự nhiên tuyệt đối an toàn, hạt xôi căng bóng dẻo thơm',
          'Hương vị thanh tao quyện mùi hương cây lá núi rừng thanh mát',
          'Bày biện hình hoa ban năm cánh hoặc âm dương lưỡng nghi trong mâm cỗ'
        ],
        materials: 'Gạo nếp nương Tú Lệ hoặc Mường Thanh, nước lá cây cẩm, nghệ dại, chõ gỗ luân phiên.',
        culturalMeaning: 'Cầu mong mưa thuận gió hòa, âm dương cân bằng, gia đình sum vầy hạnh phúc trường tồn.',
        region: 'Toàn vùng 6 tỉnh Tây Bắc'
      },
      {
        id: 'thang-co-ruou-ngo',
        name: 'Thắng Cố Chợ Phiên & Rượu Ngô Bản Phố',
        ethnicGroup: 'Dân tộc H\'Mông',
        badge: 'Hương vị chợ phiên',
        summary: 'Nồi thắng cố sôi sùng sục giữa chợ lạnh, ngụm rượu ngô cay ấm xua tan giá buốt đỉnh đèo.',
        details: 'Thắng cố truyền thống được nấu trong chảo gang lớn ngoài trời từ thịt và lục phủ ngũ tạng ngựa, bò, ninh nhừ nhiều giờ liền cùng thảo quả, quế chi, hoa hồi và hạt dổi thơm nồng. Bên nồi thắng cố nghi ngút khói, từng bát rượu ngô Bản Phố chưng cất bằng men lá cây dại được chuyền tay nhau, biến mỗi phiên chợ thành ngày hội của tình bằng hữu.',
        characteristics: [
          'Chảo gang bốc khói nghi ngút ngào ngạt mùi thảo mộc bản địa',
          'Vị ngọt bùi béo ngậy đầm ấm, ăn kèm ớt bột xào muối trắng',
          'Rượu ngô men lá thanh êm, uống say sưa mà không bao giờ nhức đầu'
        ],
        materials: 'Ngựa thảo nguyên hoặc bò vùng cao, 12 vị thảo mộc rừng, men lá bản địa bí truyền.',
        culturalMeaning: 'Tượng trưng cho tinh thần hào sảng, gắn kết cộng đồng và nghĩa tình bằng hữu vùng cao.',
        region: 'Lào Cai (Bắc Hà, Sa Pa), Hà Giang lân cận, Yên Bái'
      }
    ]
  },
  {
    id: 'le-hoi',
    title: 'Lễ Hội & Phong Tục',
    tag: 'Tín Ngưỡng Cội Nguồn',
    subtitle: 'Lời tri ân tổ tiên và ước vọng mùa màng ấm no nơi thung lũng',
    overview: 'Cuộc sống gắn chặt với nương rẫy và rừng già tôi luyện nên hệ thống lễ hội nông nghiệp giàu tính nhân văn: cầu mưa thuận gió hòa, tạ ơn thần linh và gìn giữ phong tục thành nhân.',
    artisanQuote: 'Lễ hội là khi chiêng trống thức giấc sau một năm dài, bản làng quây quần cùng uống chén rượu cần và dắt tay nhau vào vòng xòe lớn.',
    authorQuote: 'Cụ Bùi Văn Lựng – Nghệ nhân Mo Mường Hòa Bình',
    heroImage: FESTIVAL_IMAGE,
    items: [
      {
        id: 'xen-muong',
        name: 'Lễ Hội Xen Mường – Cầu Mùa Rực Rỡ',
        ethnicGroup: 'Dân tộc Thái',
        badge: 'Lễ hội lớn nhất năm',
        summary: 'Nghi lễ tâm linh tạ ơn các vị Then và cầu mong mưa thuận gió hòa cho bản mường.',
        details: 'Diễn ra vào dịp đầu xuân khi hoa ban bắt đầu nở trắng sườn non. Phần Lễ do các ông Mo Mường làm chủ tế dâng cúng thần núi, thần sông, tưởng nhớ công khai khẩn đất mường của ông bà tổ tiên. Phần Hội bùng nổ tưng bừng với ném còn, bắn nỏ, tó má lẹ và kết thúc bằng vòng xòe đại đoàn kết kéo dài thâu đêm suốt sáng.',
        characteristics: [
          'Cây nêu thần kỳ dựng giữa bãi hội treo quả còn ngũ sắc',
          'Hàng trăm nam thanh nữ tú trong trang phục truyền thống đọ tài ném còn',
          'Điệu múa Xòe vòng mời rượu cần không phân biệt già trẻ khách lạ'
        ],
        materials: 'Quả còn vải nhồi hạt bông ngũ sắc, rượu cần ủ nếp nương, mâm cỗ xôi gà thiêng.',
        culturalMeaning: 'Gắn kết tình đoàn kết các bản mường, tống tiễn tai ương năm cũ, đón chào lộc mới.',
        region: 'Điện Biên, Lai Châu, Sơn La'
      },
      {
        id: 'cap-sac-dao',
        name: 'Lễ Cấp Sắc (Quá Tang) – Dấu Ấn Thành Nhân',
        ethnicGroup: 'Dân tộc Dao',
        badge: 'Nghi lễ trưởng thành',
        summary: 'Bước ngoặt thiêng liêng công nhận người đàn ông Dao chính thức trưởng thành và có đạo lý.',
        details: 'Một người đàn ông Dao dù bao nhiêu tuổi nếu chưa qua Lễ Cấp Sắc thì chưa được coi là người lớn và chưa được tham gia các công việc hệ trọng của bản. Nghi lễ diễn ra trang nghiêm từ 3 đèn, 7 đèn đến 12 đèn với các bài cúng cổ răn dạy lòng hiếu kính, điều nhân nghĩa, điều cấm kỵ giữ rừng và bảo vệ xóm làng.',
        characteristics: [
          'Tranh thờ Bàn Vương cổ và các vị thần Tam Thanh treo kín gian lễ',
          'Nghi thức rơi từ đài cao xuống lưới an toàn thử thách lòng can đảm',
          'Thầy cúng trao cho người thụ sắc pháp danh và binh mã tâm linh giữ đạo'
        ],
        materials: 'Tranh thờ cổ giáp thủ công, bộ đèn dầu thiêng, sắc phong giấy bản viết chữ Nôm Dao.',
        culturalMeaning: 'Giáo dục đạo đức, bổn phận đối với gia đình họ tộc và bảo vệ bình yên bản làng.',
        region: 'Lào Cai, Lai Châu, Yên Bái'
      },
      {
        id: 'cho-tinh-vung-cao',
        name: 'Chợ Tình Sa Pa & Khâu Vai – Nơi Gặp Gỡ Con Tim',
        ethnicGroup: 'Dân tộc H\'Mông, Dao, Tày',
        badge: 'Không gian nhân văn',
        summary: 'Chốn hẹn hò trao gửi lời yêu bằng tiếng khèn, câu hát sli, câu lượn ngọt ngào dưới ánh trăng.',
        details: 'Không phải là nơi buôn bán hàng hóa đơn thuần, chợ tình là nơi gặp lại của những người từng thương mà không đến được với nhau, là chốn tìm bạn đời của lớp trẻ vùng cao. Dưới làn sương se lạnh, tiếng khèn Mông vút lên gọi bạn tình, các cô gái e ấp che ô hoa, vòng tay chạm nhẹ trong chén rượu nồng say.',
        characteristics: [
          'Tiếng khèn Mông du dương luyến láy như lời thủ thỉ con tim',
          'Trao khăn thêu, tặng vòng tay làm kỷ vật ước hẹn thề non hẹn biển',
          'Không khí thanh lịch, tôn trọng tình cảm thiêng liêng không vụ lợi'
        ],
        materials: 'Cây khèn Mông 6 ống trúc, chiếc ô hoa thổ cẩm, chén rượu thóc men lá.',
        culturalMeaning: 'Giá trị nhân văn sâu sắc, tôn vinh tình yêu đôi lứa và tự do tìm kiếm hạnh phúc.',
        region: 'Lào Cai (Sa Pa, Bắc Hà), Hà Giang'
      }
    ]
  },
  {
    id: 'kien-truc',
    title: 'Kiến Trúc Nhà Ở Vùng Cao',
    tag: 'Nếp Nhà Đại Ngàn',
    subtitle: 'Nghệ thuật thích ứng địa hình từ nhà sàn gỗ nứa đến nhà trình tường đất nện',
    overview: 'Mỗi kiểu nhà của đồng bào Tây Bắc là một công trình kiến trúc dân gian độc đáo, giải quyết hoàn hảo bài toán địa hình hiểm trở, khí hậu khắc nghiệt và thú dữ của núi rừng.',
    artisanQuote: 'Dựng ngôi nhà sàn phải chọn cây gỗ già trên rừng vào ngày lành, mái khau cút bắc ngang như đôi sừng trâu bảo vệ ấm êm cho ba thế hệ chung sống.',
    authorQuote: 'Kiến trúc sư Hoàng Đạo Kính – Chuyên gia Di sản Dân tộc',
    heroImage: HERO_IMAGE,
    items: [
      {
        id: 'nha-san-nguoi-thai',
        name: 'Nhà Sàn Người Thái Mái Khau Cút',
        ethnicGroup: 'Dân tộc Thái',
        badge: 'Kiến trúc biểu tượng',
        summary: 'Nhà sàn cao ráo với mái vòm Khau Cút hình sừng giang độc đáo che mưa chắn gió mùa sương.',
        details: 'Nhà sàn người Thái được dựng bằng gỗ lim, nghiến hoặc tre nứa già, cách mặt đất từ 1.5 đến 2 mét. Mái nhà hình mai rùa cong vút, hai đầu nóc đính biểu tượng "Khau Cút" (hai thanh gỗ bắt chéo hình trăng khuyết hoặc sừng trâu cách điệu). Nhà chia thành hai phần: "Tang Quán" dành cho nam giới và tiếp khách, "Tang Chan" dành cho phụ nữ và sinh hoạt bếp núc gia đình.',
        characteristics: [
          'Khau Cút trên nóc nhà thể hiện địa vị và gia phong truyền thống',
          'Hai cầu thang tách biệt: thang 9 bậc cho nam giới, thang 7 bậc cho phụ nữ',
          'Bếp lửa thiêng luôn đỏ ấm cả ngày đêm làm ấm nhà và sấy khô ngô thóc'
        ],
        materials: 'Cột gỗ tròn vững chãi liên kết mộng gỗ không dùng đinh, sàn dát nứa băm, mái lợp gianh hoặc ngói máng.',
        culturalMeaning: 'Sự hòa hợp tuyệt đối giữa con người và tự nhiên, phản ánh tôn ty trật tự gia đình êm ấm.',
        region: 'Sơn La, Điện Biên, Lai Châu, Hòa Bình'
      },
      {
        id: 'nha-trinh-tuong-hmong',
        name: 'Nhà Trình Tường Đất Nện Dày Dặn',
        ethnicGroup: 'Dân tộc H\'Mông & Hà Nhì',
        badge: 'Kiến trúc thích ứng',
        summary: 'Tường đất nện dày nửa mét, đông ấm hạ mát kiên cố như pháo đài giữa sườn núi cao.',
        details: 'Để chống chọi với cái lạnh thấu xương của mùa đông vùng cao và sương mù bao phủ, người H\'Mông và Hà Nhì dùng đất sét dẻo trộn sỏi vụn đưa vào khuôn gỗ, dùng chày gỗ nện thật chặt tạo thành bức tường dày từ 40 - 60cm. Nhà thường khép kín, cửa sổ nhỏ hình chữ nhật, mái lợp ngói âm dương hoặc cỏ tranh dày cộm.',
        characteristics: [
          'Tường đất nện vàng rực ấm áp hòa vào cảnh sắc núi non trùng điệp',
          'Khả năng giữ nhiệt kỳ diệu: ngoài trời 0°C trong nhà vẫn ấm sực',
          'Hàng rào xếp bằng đá cuội tự nhiên không cần vôi vữa bao quanh khuôn viên'
        ],
        materials: 'Đất sét đỏ đồi núi, đá phiến xếp chân móng, gỗ sa mu lợp mái, khuôn ván gỗ nện.',
        culturalMeaning: 'Biểu tượng cho ý chí kiên cường, sự bền bỉ bám trụ sinh tồn trên núi đá cằn cỗi.',
        region: 'Lào Cai (Bắc Hà, Y Tý), Lai Châu (Sìn Hồ, Ka Lăng), Yên Bái'
      }
    ]
  },
  {
    id: 'am-nhac-mua-xoe',
    title: 'Âm Nhạc, Điệu Múa & Dụng Cụ',
    tag: 'Âm Vang Đại Ngàn',
    subtitle: 'Nghệ thuật Múa Xòe Di sản Nhân loại và thanh âm khèn then gọi bạn',
    overview: '"Không xòe không vui, không xòe cây lúa không tốt, không xòe đôi lứa không thành duyên". Tiếng nhạc rộn rã ngàn đời gắn kết con người với đất trời, xua tan mệt nhọc nương rẫy.',
    artisanQuote: 'Khi tiếng trống bập bùng vang lên cùng tiếng đàn Tính, đôi chân phụ nữ Thái tự khắc bước vào vòng Xòe, tay nắm chặt tay không còn ranh giới người lạ hay người quen.',
    authorQuote: 'Nghệ nhân Ưu tú Điêu Chính Lả – Sơn La',
    heroImage: FESTIVAL_IMAGE,
    items: [
      {
        id: 'mua-xoe-thai',
        name: 'Nghệ Thuật Múa Xòe Thái (UNESCO Recognized)',
        ethnicGroup: 'Dân tộc Thái',
        badge: 'Di sản thế giới',
        summary: 'Di sản văn hoá phi vật thể đại diện của nhân loại với 36 điệu xòe cổ uyển chuyển.',
        details: 'Múa Xòe là linh hồn của sinh hoạt cộng đồng Thái. Có 6 điệu Xòe cổ tiêu biểu nhất: Xòe vòng (khmách khăn múa xòe), Xòe nón (múa xòe nón), Xòe quạt, Xòe khăn, Xòe tiến lùi và Xòe vỗ tay. Mọi người cầm tay nhau tạo thành những vòng tròn đồng tâm xoay quanh đống lửa bập bùng, bước chân nhịp nhàng theo tiếng trống, chiêng và thanh la giòn giã.',
        characteristics: [
          'Vòng xòe mở rộng không giới hạn người tham gia, thể hiện sự bình đẳng',
          'Động tác vung khăn Piêu hay xoay nón lá mềm mại tựa cánh hoa ban',
          'Tiếng hô hào vang dội rộn rã tiếp lửa cho vòng xòe kéo dài đến bình minh'
        ],
        materials: 'Khăn Piêu dệt tay, nón lá Thái, trống cái bọc da trâu, chiêng đồng, chũm chọe.',
        culturalMeaning: 'Biểu tượng tối cao của tình đoàn kết cộng đồng, lòng cởi mở mến khách của người Thái.',
        region: 'Yên Bái (Mường Lò), Sơn La, Điện Biên, Lai Châu'
      },
      {
        id: 'khen-hmong',
        name: 'Tiếng Khèn Mông – Tiếng Lòng Chàng Trai Bản',
        ethnicGroup: 'Dân tộc H\'Mông',
        badge: 'Nhạc cụ linh hồn',
        summary: 'Cây khèn 6 ống trúc vừa thổi vừa nhào lộn điêu luyện giãi bày tình yêu và tâm linh.',
        details: 'Khèn Mông là nhạc cụ độc đáo nhất của vùng cao. Thân khèn làm bằng gỗ pơ mu hoặc thông, gắn 6 ống trúc có lưỡi gà bằng đồng thau. Người thổi khèn vừa tạo ra âm thanh ngân vang lúc trầm lúc bổng, vừa thực hiện các động tác múa xoay vòng, nhào lộn, ngồi xổm kẹp khèn qua chân đòi hỏi thể lực phi thường và kỹ thuật điêu luyện.',
        characteristics: [
          'Âm sắc dày, vang vọng xa hàng cây số qua các hẻm vực núi đá',
          'Vừa là nhạc cụ tâm linh tiễn đưa người khuất, vừa là điệu kèn tỏ tình mùa xuân',
          'Vũ điệu múa khèn mạnh mẽ, dứt khoát tôn vinh vẻ đẹp khỏe khoắn của nam giới'
        ],
        materials: 'Ống trúc già phơi khô, bầu khèn gỗ thông đá, lưỡi gà đồng đập mỏng, dây vỏ cây cuốn.',
        culturalMeaning: 'Cây cầu nối giữa thế giới con người và thế giới tổ tiên, phương tiện tỏ tình cao đẹp.',
        region: 'Toàn vùng rẻo cao Tây Bắc'
      },
      {
        id: 'dan-tinh-hat-then',
        name: 'Đàn Tính Tẩu & Điệu Hát Then Ngọt Ngào',
        ethnicGroup: 'Dân tộc Thái & Tày',
        badge: 'Di sản phi vật thể',
        summary: 'Cây đàn tính mộc mạc làm từ quả bầu khô hòa giọng hát then ngọt ngào như suối mát.',
        details: '"Tính" là đàn, "Tẩu" là quả bầu. Cần đàn làm bằng gỗ dâu dài hơn một mét, hộp cộng hưởng làm từ nửa quả bầu già phơi khô, căng mặt đàn bằng da trăn hoặc da dê. Khi người nghệ nhân gảy từng nốt đàn ấm áp hòa cùng câu hát Then, không gian như lắng đọng, kể về cội nguồn mường trời và mang lại sự bình an cho tâm hồn.',
        characteristics: [
          'Âm thanh trầm ấm, trong trẻo và lắng sâu như tiếng suối reo trong khe đá',
          'Thường biểu diễn kết hợp với chùm xóc nhạc rung vang giòn giã',
          'Nghi lễ Then đưa đường chỉ lối xua đuổi muộn phiền cho bản làng'
        ],
        materials: 'Bầu khô già chọn kỹ, cần gỗ dâu tằm, dây tơ tằm se đôi hoặc dây cước tơ.',
        culturalMeaning: 'Nét đẹp âm nhạc tâm linh thanh tao của các dân tộc ven dòng suối lớn miền Tây Bắc.',
        region: 'Lai Châu, Điện Biên, Sơn La, Lào Cai, Yên Bái'
      }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Ruộng Bậc Thang Mù Cang Chải',
    category: 'landscape',
    categoryLabel: 'Thắng cảnh',
    ethnic: 'H\'Mông',
    location: 'Mù Cang Chải, Yên Bái',
    description: 'Nấc thang vàng óng ả mùa lúa chín hòa cùng mây núi bồng bềnh, kiệt tác kiến tạo bằng mồ hôi và lòng kiên cường qua nhiều thế hệ đồng bào Mông.',
    imageUrl: HERO_IMAGE
  },
  {
    id: 'gal-2',
    title: 'Nét Thêu Thổ Cẩm Sáp Ong Bản Sin Suối Hồ',
    category: 'costume',
    categoryLabel: 'Trang phục & Dệt',
    ethnic: 'H\'Mông Đen & Dao',
    location: 'Phong Thổ, Lai Châu',
    description: 'Thiếu nữ vùng cao trong bộ trang phục thổ cẩm rực rỡ, vòng bạc nguyên chất và kỹ thuật thêu tay truyền thống độc nhất vô nhị.',
    imageUrl: COSTUME_IMAGE
  },
  {
    id: 'gal-3',
    title: 'Mâm Cơm Lễ Hội Tây Bắc',
    category: 'cuisine',
    categoryLabel: 'Ẩm thực',
    ethnic: 'Thái & Khơ Mú',
    location: 'Bản Lác, Hòa Bình & Mộc Châu',
    description: 'Pa Pỉnh Tộp nướng than hồng, thịt trâu gác bếp đậm khói, xôi ngũ sắc óng ánh bày trên lá chuối tươi giữa gian bếp sàn.',
    imageUrl: CUISINE_IMAGE
  },
  {
    id: 'gal-4',
    title: 'Vòng Xòe Bên Lửa Trại Bản Pom Coong',
    category: 'festival',
    categoryLabel: 'Lễ hội & Di sản',
    ethnic: 'Thái Trắng',
    location: 'Mai Châu, Hòa Bình & Mường Lò',
    description: 'Hàng trăm bàn tay đan chặt bước theo nhịp trống chiêng, ánh lửa bập bùng soi rọi nụ cười rạng rỡ của những tà áo Cỏm thắt eo xanh.',
    imageUrl: FESTIVAL_IMAGE
  },
  {
    id: 'gal-5',
    title: 'Đỉnh Đèo Ô Quy Hồ Hoàng Hôn',
    category: 'landscape',
    categoryLabel: 'Thắng cảnh',
    ethnic: 'Đa sắc tộc',
    location: 'Ranh giới Lào Cai - Lai Châu',
    description: 'Cổng trời Ô Quy Hồ - một trong tứ đại đỉnh đèo của Việt Nam, nơi biển mây cuồn cuộn đổ qua dãy Hoàng Liên Sơn hùng vĩ.',
    imageUrl: HERO_IMAGE
  },
  {
    id: 'gal-6',
    title: 'Áo Cỏm & Khăn Piêu Duyên Dáng',
    category: 'costume',
    categoryLabel: 'Trang phục & Dệt',
    ethnic: 'Thái Đen',
    location: 'Thành phố Điện Biên Phủ',
    description: 'Hàng cúc bướm bạc lấp lánh cài nghiêng ngực áo, tôn vinh nét đẹp thắt đáy lưng ong và sự dịu dàng của người con gái Thái.',
    imageUrl: COSTUME_IMAGE
  }
];

export const CULTURAL_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: 'Di sản văn hoá phi vật thể nào của vùng Tây Bắc được UNESCO ghi danh là Di sản Văn hoá phi vật thể đại diện của nhân loại vào năm 2021?',
    options: [
      'Nghệ thuật Đờn ca tài tử',
      'Nghệ thuật Múa Xòe Thái',
      'Hát Ca trù',
      'Không gian văn hoá Cồng chiêng'
    ],
    correctAnswer: 1,
    explanation: 'Nghệ thuật Xòe Thái của đồng bào dân tộc Thái (Sơn La, Điện Biên, Lai Châu, Yên Bái) đã được UNESCO chính thức ghi danh là Di sản Văn hoá phi vật thể đại diện của nhân loại vào tháng 12/2021.',
    culturalFact: '"Không xòe không vui, không xòe cây lúa không tốt" – Điệu xòe là biểu tượng cao quý cho tinh thần cộng đồng gắn kết.'
  },
  {
    id: 2,
    question: 'Gia vị đặc trưng nhất tạo nên mùi thơm cay the nồng nàn độc nhất vô nhị trong món Pa Pỉnh Tộp và Thịt trâu gác bếp là gì?',
    options: [
      'Hạt tiêu sọ Phú Quốc',
      'Quả hồi quế cay',
      'Hạt Mắc khén và hạt Dổi rừng',
      'Thảo quả sấy khô'
    ],
    correctAnswer: 2,
    explanation: 'Hạt mắc khén (được ví như hoa tiêu rừng Tây Bắc) cùng hạt dổi rừng nướng than giã nhỏ là "cặp bài trùng" gia vị không thể thiếu làm nên linh hồn của ẩm thực núi rừng.',
    culturalFact: 'Hạt mắc khén phải rang vàng trên chảo gang nhỏ lửa, để nguội rồi mới xay mới giữ trọn vẹn tinh dầu the mát như vỏ bưởi non.'
  },
  {
    id: 3,
    question: 'Kỹ thuật trang trí hoa văn độc đáo nào của phụ nữ dân tộc H\'Mông đòi hỏi dùng bút đồng vẽ sáp ong nóng chảy lên vải lanh trước khi nhuộm chàm?',
    options: [
      'Kỹ thuật thêu cạp váy',
      'Kỹ thuật vẽ sáp ong (Batik)',
      'Kỹ thuật in mộc bản',
      'Kỹ thuật dệt kim sa'
    ],
    correctAnswer: 1,
    explanation: 'Kỹ thuật vẽ sáp ong trên vải lanh của người Mông là di sản thủ công tinh xảo bậc nhất. Sáp ong sau khi vẽ khô sẽ được đem nhuộm chàm nhiều lần rồi luộc qua nước sôi để sáp tan chảy, để lại hoa văn trắng tinh khôi.',
    culturalFact: 'Nghệ nhân Mông vẽ các đường nét hình học đối xứng chuẩn xác tuyệt đối hoàn toàn bằng mắt và cảm nhận tay mà không cần thước kẻ.'
  },
  {
    id: 4,
    question: 'Vùng văn hoá Tây Bắc theo phân vùng địa lý văn hoá truyền thống gồm có bao nhiêu tỉnh thành anh em?',
    options: [
      '4 tỉnh thành',
      '5 tỉnh thành',
      '6 tỉnh thành: Điện Biên, Lai Châu, Sơn La, Hòa Bình, Yên Bái, Lào Cai',
      '8 tỉnh thành'
    ],
    correctAnswer: 2,
    explanation: 'Không gian văn hoá Tây Bắc chính thống gồm 6 tỉnh: Điện Biên, Lai Châu, Sơn La, Hòa Bình, Yên Bái và Lào Cai, nơi hội tụ hơn 20 dân tộc anh em cùng chung sống hòa thuận.',
    culturalFact: 'Tây Bắc sở hữu dãy núi Hoàng Liên Sơn với đỉnh Fansipan 3.143m cao nhất Đông Dương và con sông Đà cuồn cuộn huyền thoại.'
  }
];
