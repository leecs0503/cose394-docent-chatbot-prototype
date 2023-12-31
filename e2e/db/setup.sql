DROP TABLE IF EXISTS place;
DROP TABLE IF EXISTS art_work;
DROP TABLE IF EXISTS path;
DROP TABLE IF EXISTS path_point;

CREATE TABLE place (
    id          SERIAL       PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    description TEXT         NOT NULL DEFAULT ''
);

CREATE TABLE art_work (
    id          SERIAL,
    place_id    INT          NOT NULL,
    name        VARCHAR(255) NOT NULL,
    summary     TEXT,
    description TEXT,
    PRIMARY KEY (id, place_id)
);

CREATE TABLE path (
    id          SERIAL       NOT NULL,
    place_id    INT          NOT NULL,
    name        VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL DEFAULT '',
    PRIMARY KEY (id, place_id)
);

CREATE TABLE path_point (
    id      SERIAL NOT NULL,
    path_id INT    NOT NULL,
    x       INT    NOT NULL,
    y       INT    NOT NULL,
    PRIMARY KEY (id, path_id)
);



-- place 쿼리:
INSERT INTO place (id, name, description)
       VALUES (1, E'고려대 박물관', E'서울 고려대학교 백주념기념관에 위치한 고려대학교 박물관은 한국 문화와 역사의 보고입니다. 이곳에서는 고대 유물부터 현대 예술까지 한국의 다채로운 역사를 만날 수 있습니다. 전시물들은 한국의 전통과 현대 사이의 아름다운 조화를 보여주며, 방문객들에게 교육적인 경험과 함께 문화적 통찰력을 제공합니다.');

-- artwork 쿼리:
INSERT INTO art_work (id, name, summary, description, place_id)
       VALUES (0, E'혼천의 및 혼천시계', E'송이영, 1669년, 국보 제 230호, 철∙나무', E'"혼천의 및 혼천시계"는 조선시대 천문학 교수 송이영이 1669년에 만든 국보 지정된 천문시계로, 홍문관에 설치되어 시간 측정과 천문학 교습에 사용되었습니다. 이 유물은 동서양의 천문학적 지식을 결합한 독특한 조형물로, 기계식 시계와 전통적인 혼천의가 조화롭게 어우러져 있습니다.\n작품의 기계식 시계장치는 나무상자 속에 있으며, 탈진기주를 포함하고 있습니다. 혼천의 부분은 지구를 중심으로 하는 지평환, 천경흑쌍환, 삼신의 등으로 이루어져 있습니다. 낙하운동의 원리를 활용하여 작동하며, 시간과 천체의 위치를 동시에 알 수 있도록 설계되었습니다. 혼천의 부분은 동아시아 전통의 혼천의와 서양에서 전해진 지구설을 결합하여 세계지도를 표현한 독특한 특징을 지니고 있습니다.\n"혼천의 및 혼천시계"는 동서양 과학기술의 융합과 조화를 나타내는 귀중한 유물로, 조선시대의 천문학적 지식과 혼합된 혁신적인 특성을 지닙니다. 이 유물은 세계 시계기술사 뿐만 아니라 과학기술사에서도 중요한 의미를 지니며, 동아시아와 서양의 과학기술 지식이 융합되고 조화된 모습을 보여주고 있습니다.', 1),
              (1, E'동궐도', E'국보 제 249호', E'"동궐도"는 조선시대의 법궁인 창덕궁과 창경궁을 조감도식으로 그린 궁궐도로서 이 화첩을 모두 펼쳐 연결하면 평행사선 구도에 의해 그려진 두 궁궐의 모습이 장대하게 전개됩니다. \n1824년에서 1830년의 사이의 어느 시점에 제작된 것으로 예측되며,  고려대본은 16권의 화첩으로 이루어져 있고, 각 화첩은 5절 6면으로 구성되어 있습니다. \n또한, 창경궁과 창덕궁은 경복궁의 동쪽에 있으므로 ''동궐''이라고 불렸습니다. \n동궐도는 창덕궁과 창경궁의 전체 구조와 배치, 규모, 주변의 자연 환경을 소상하게 알려줍니다.\n동궐도에는 건물뿐 아니라 담장, 계단, 연못, 우물 등의 시설물과 자연이 실제하는 그대로 묘사되어 있습니다.\n중국, 일본과는 달리 동아시아를 대표하는 작품으로 평가되며, 조선시대 궁궐을 상세하게 그린 회화 작품이\n여러 차례 제작되었음을 알려주기에 궁중회화로서 더없이 중요한 자료로 남겨져 있습니다.', 1),
              (2, E'분청사기인화문태호', E'국보 제 177호, 조선 15세기', E'"분청사기 인화 문태호"는 국보 177호로 조선 15세기에 만들어진 태항아리입니다. \n1970년대 고려대학교 구내에서 건축공사를 하던 중에 발견되었습니다. 태 항아리는 주로 왕실에서 \n태를 담기 위해 사용되었으며, 내항아리와 외항아리로 되어 있습니다. 내∙외 항아리 각각에 뚜껑이 있고, \n높이 26.5cm, 입지름 9cm, 바닥 지름 9.5cm인 내항아리와 높이 42.8cm, 입지름 26.5cm, 밑지름 27.6cm인\n외항아리로 되어 있습니다. 외항아리 안에는 흙이 3분의 2쯤 차 있고, 내항아리는 짚 망태기에 넣어져 \n외항아리에 담겨 있습니다. 내항아리 안에는 태와 태로 싸았던 것으로 짐작되는 것이 썩어 변질된 채로 \n남아 있으며 옆전 2닢이 들어 있었습니다. 외항아리는 풍만하고 내항아리는 홀쭉한 형태입니다. \n외항아리 무늬에는 어깨에서부터 연꽃 무늬, 국화 무늬로 둘러져 있으며, 몸통 전체에 국화무늬를\n찍어놓았고, 몸통 아래 부분에도 어깨부위와 같은 연꽃 무늬로 띠가 둘러져있습니다. \n내항아리는 뚜껑에 거북등 모양의 6각형 무늬가 있고, 몸통에는 국화 무늬로 가득 차 있습니다. \n분청사기인화문태혼은 조선시대에 만들어진 분청사기 중에 작품의 완성도가 가장 높다고 알려져 있는 작품입니다.', 1),
              (3, E'금강산도', E'허필, 종이에 수묵, 18세기', E'"금강산도"는 금강산 지역과 주변을 담은 그림으로, 고려 말부터 현대까지 꾸준한 제작을 통해 우리나라 실경산수화 전통의 중요한 영역으로 자리매김했습니다. 금강산도는 한국의 기이하고 아름다운 지질과 다양한 산세를 반영해왔으며, 금강산의 명성은 국제적으로도 알려져 있어 국내뿐 아니라 중국과 일본에서도 소재로 활용되었습니다. 금강산은 여러 이름을 가지며 각 시대와 인물의 사상, 종교를 반영해왔고, 이들 이름은 금강산도의 특징과 변천을 이해하는 데 중요한 단서를 제공하곤 합니다.\n고려 말부터 조선 중기까지 금강산도는 주로 종교적 동기에서 그려졌으며, 조선 중기 이후에는 문인들의 표현과 성격이 강조되었다는 특징이 있습니다. 특히 18세기에는 허필, 정선과 다수의 문인화가들이 참여하여 진경산수화풍이 정립되었고, 이후 18세기 중반 이후에는 사실적인 표현이 강조되며 변화해왔습니다. 김홍도의 등장은 서양화의 개념과 기법을 적용한 사실적인 표현으로 금강산도를 현대적으로 바라보게 하기도 했습니다.금강산도는 19세기 후반까지 다양한 화가들에 의해 계속 그려지며 변화해오곤 했습니다. 금강산의 풍경은 문학, 회화, 예술적 표현의 전통이 꾸준히 이어져 왔으며, 현대에는 남한과 북한 작가들에 의해 계속 그려지고 있습니다. 이는 분단된 현실을 상징하기도 하고, 한반도의 승경을 대변하는 예술적 대상으로 여겨지기도 합니다. 금강산도는 단순히 회화가 아니라 우리 민족의 역사, 생명력, 창조성을 대변하는 중요한 예술적 유산으로 평가되어야 합니다.', 1),
              (4, E'자소상', E'권진규, 1958년 제작, 테라코타 조각 작품', E'"자소상"은 1958년에 권진규가 자기 자신을 마스크 형태의 테라코타 조각으로 제작한 작품입니다. 여기서 테라코타는 흙을 높은 온도에서 구워서 조각하는 기법으로, 흙으로 만든 것을 먼저 찰흙으로 조각한 뒤 석고 형틀에 넣고 구울 때 터지지 않도록 하는 기법입니다.\n\n권진규는 테라코타 기법을 선호했고, 작품마다 테라코타의 내구성과 우연성을 강조하곤 했습니다. 1960~70년대의 한국 조각계에서는 추상조각이 성행했지만, 권진규는 이 시기에도 테라코타를 사용하여 현대적인 작품을 제작했습니다. 권진규가 자주 사용한 자신의 이미지를 담고 있으며, 마스크 형태로 얼굴의 핵심적인 특징을 강조하여 내면과 개성을 표현했습니다.\n\n이 작품은 특별한 인연을 담고 있는데 권진규가 자신의 제자인 김정제에게 선물한 것으로, 뒷면에는 "呈 金廷帝 權鎭圭 作"(정 김정제 권진규 작)라고 써져 있습니다. 권진규는 1973년에 스스로 목숨을 끊기 전 김정제에게 유서를 남겼는데, 이 작품을 선물한 것은 그 인연을 상징적으로 담고 있습니다. 이 작품은 권진규의 예술적 표현과 개인적인 감정, 그리고 테라코타의 거친 질감을 통해 과거와 현재, 초시간적인 느낌을 동시에 전달합니다.  1958년 제4회 일양회 미술전람회에 출품하여 수상했고, 1965년 신문회관 화랑에서 개최된 최초의 서울 개인전, 1968년 일본의 도쿄 니혼바시화랑의 개인전에서도 전시될만큼 여러 전시에서 소개되었습니다. \n종합적으로 자소상은 권진규의 예술적 취향과 테라코타 기법의 특징을 잘 보여주는 작품입니다.', 1),
              (5, E'등나무', E'이응로, 1940년대, 한국화', E'"등나무"는 이응노가 1940년대에 그린 수묵 담채 한국화로 대문 사이로 들여다보는 풍경을 담고 있습니다.\n\n작가 이응노는 추상화로 유명한데, 이 작품은 그가 수업기에 전통적인 대나무를 그린 초기 작품 중 하나로 꼽히곤 합니다.  "등나무"에서는 전통적인 수묵화의 특징과 동양화의 한계를 뛰어넘는 시도가 돋보인다는 것이 특징입니다. 일본에서 근대 남화의 영향을 받은 이응노는 일본 유학 시기에 신남화의 주요 작가 마츠바야시 게이게츠의 덴코화숙에서 교육을 받았습다. 그 결과, "등나무"에서는 전통적 남종화법에 서양화법의 특징이 절묘하게 결합되어 있습니다. 특히 등나무의 꽃과 잎사귀에 표현된 강렬한 보라색과 녹색은 작품 전체에 화사하면서도 이국적인 느낌을 부여합니다.\n\n이 작품은 대문 사이로 열린 풍경을 통해 마당과 우물, 마루와 방안의 인물들을 한눈에 볼 수 있도록 구성되었습니다. 이렇게 현실적인 사물을 자세하게 그림으로써 작품은 일상의 소소한 순간을 포착합니다. 대문 옆의 굴뚝, 빗자루, 마당 안의 도르래 등의 소재는 작가의 세밀한 관찰력을 드러내며, 들여다보는 듯한 시점은 섬세한 사실성을 부여합니다.\n\n"등나무"는 이응노의 예술적 진화를 엿볼 수 있는 중요한 작품 중 하나로, 그의 화가로서의 탐구와 다양한 실험을 보여주는 작품입니다. 이는 그가 한국 미술사에서 차지하는 중요한 위치를 강조하는 작품으로 해석될 수 있습니다.', 1);

-- path 관련 쿼리:
-- pathID: 1 (파일: 추천루트01.xlsx)
INSERT INTO path (id, place_id, name, description)
       VALUES (1, 1, E'바쁘다 바빠 고대인!', E'바쁜 여러분들을 위한 고려대 박물관 속성 가이드!');
INSERT INTO path_point (id, x, y, path_id)
       VALUES (0, 106, 199, 1),
              (1, 264, 361, 1),
              (2, 543, 361, 1),
              (3, 588, 169, 1),
              (4, 214, 768, 1),
              (5, 437, 573, 1);

-- place 쿼리:
INSERT INTO place (id, name, description)
       VALUES (2, E'고려대 투어', E'고려대학교는 서울의 안암동에 자리 잡고 있으며, 역사와 현대성이 공존하는 아름다운 캠퍼스를 자랑합니다. 고전적인 한국 건축 양식과 현대적인 디자인이 조화롭게 어우러진 건물들이 특징입니다. 캠퍼스 곳곳에 펼쳐진 녹지와 조각상들은 고려대의 역사적 가치와 학문적 전통을 느낄 수 있는 공간을 만들어냅니다.');

-- artwork 쿼리:
INSERT INTO art_work (id, name, summary, description, place_id)
       VALUES (0, E'민주광장', E'현대사의 굴곡마다 고려대 학생들이 모여 불의에 항거할 것을 결의했던 광장', E'고려대학교 민주광장은 현대사의 굴곡마다 고려대 학생들이 모여 불의에 항거할 것을 결의했던 광장입니다. 또한 민주광장에는 ''진혼비''라는 비석이 있으며, 민주화 운동의 선봉에 서서 싸워주신 김두황 선배님을 비롯한 여섯분의 민주열사를 기리기 위해 세워졌습니다.  붉은색 벽돌로 이루어진 바닥이 인상적인데 이는 불의에 항거해왔던 고려대학교 선배님들의 피와 노고를 기리기 위함입니다. 과거에는 한국의 민주주의를 수호하기 위한 땀과 눈물의 공간이었지만, 지금은 학생들의 휴식 및 여가 공간으로 이용됩니다. 학기초마다 약 240여개의 동아리가 참여하는 동아리 박람회가 주최되거나 고려대학교 축제 중 하나인 석탑대동제 공간으로 활용되고 있습니다.', 2),
              (1, E'4.18 기념관', E'4.19 혁명의 기폭제가 되었던 4.18 고대생 의거를 기억하기 위해 설립된 건물', E'고려대학교 4.18 기념관은 3.15 부정선거와 독재를 규탄하기 위해 고려대학교 학생들이 벌인 학생 시위이자 4.19 혁명의 기폭제가 되었던  4.18 의거를 기억하기 위해 설립된 건물입니다. \n고려대학교는 선배님들의 정신을 이어받기 위해 4월 18일마다 고려대학교 정문부터 수유리에 있는 4.18 국립묘역까지 마라톤을 하는 4.18 구국 대장정을 진행하고 있습니다. 건물에는 4.18 고대생 의견을 기리기 위한 4.18 기념탑이 있습니다. 기념탑에는 시인이자 고려대학교 교수님이셨던 주지훈 선생님의 "자유! 너 영원한 활화산이여!"라는 제목의 비문이 새겨져 있습니다.', 2),
              (2, E'대강당', E'1956년에 지어진 석조 단층 건물이며, 총학생회장 개표 등의 \n행사가 열리는 건물', E'고려대학교 대강당은 1956년에 지어진 석조 단층 건물이며 3개의 큰 강의실로 이루어져 있습니다. 지어질 당시에는 교내에서 가장 큰 규모의 건물이었기에, 응원단 연습, 총학생회장 개표, 강연회 등의 행사가 자주 열리기도 했습니다. 2019년 옛것을 본받아 새로운 것을 창조한다는 법고창신의 정신으로 리모델링 되었습니다.  리모델링 시기에 SK 미래관이 준공되면서 대강당 과 SK 미래관을 이어주는 ''하나 플라자''라는 공간이 생기기도 했습니다. ''하나 플라자''는 과거를 상징하는 대강당과 미래를 상징하는 SK 미래관을 연결해주는 공간이기에 현재를 상징하고 있습니다.', 2),
              (3, E'서관', E'한차 책 서(書)자를 사용한 인문학을 다루는 문과대학 건물', E'고려대학교 서관은 문과대학 건물이며, 약 1.8m의 초대형 시계로 이루어진 \n시계탑과 호상이 고려대학교의 정신을 보여주는 상징물로 존재합니다. \n시계탑에서는 9시와 12시가 되면 교가와 전래동요가 울려 퍼지는 것이 특징입니다.\n서관은 창문의 크기와 건물의 높낮이가 불균형적인 특징이 있는데 그 이유는 서관을 짓는 당시 6.25 전쟁이 발발해 공사가 중단되었기 때문입니다. \n그 후 6년이 지나서야 개교 50주년 기념사업으로 준공되여 현재의 모습을 갖추게 되었습니다. 서관은 고려대학교를 대표하는 3개의 건물(본관, 대학원 도서관, 서관)중 하나이며 고려대학교의 고풍스러운 느낌을 잘 나타내는 건물입니다.', 2),
              (4, E'중앙도서관', E'1978년, 개교 70주년 기념사업으로 준공된 고려대학교의 대표 도서관', E'고려대학교 중앙도서관은 1978년, 개교 70주년 기념사업으로 준공된 고려대학교의 대표 도서관으로 화강암으로 지어진 석조 건물입니다. 이것의 이면에는 불의에 항거하고 한결같이 정의를 수호하고자 하는 고려대학교의 저항 정신이 담겨져 있습니다.\n중앙도서관 1층에는 24시간 이용 가능한 열람실이 위치해있고, 20000명을 수용할 수 있으며, 200만여 권의 장서를 보유할 수 있도록 설계되었습니다. \n현재 중앙도서관은 130만여 권의 장서를 소장하고 있으며, 고려대 내의 5개 도서관 중 가장 많은 저서를 보관하고 있습니다.', 2),
              (5, E'의과캠 언덕길', E'1번 루트', E'이번 저녁 산책길 루트는 화정체육관 쪽으로 가는 의과캠 오르막에서 시작해. 위치는 디어브레드 빵집 바로 오른쪽 언덕길에서부터 시작하면 돼. 오르막길을 오르면서 오른쪽에 간간히 보이는 안암동 동네의 야경을 구경하면서 천천히 올라가보자고', 2),
              (6, E'민족문화연구원', E'2번 루트', E'화정 체육관에서 오른쪽으로 더 가다보면 나오는 민족문화연구원은 한국학의 시야 확장 및 역할 증대를 도모하고자 만들어진 곳이야. 캠퍼스 건물과는 사뭇 다른 분위기를 내주어서 좋은 곳이기도 해. 화정체육관과 연구원 사이의 샛길 언덕으로 올라가면 또 다른 야경을 볼 수 도 있으니 한 번 도전해보는 건 어떨까?', 2),
              (7, E'개운산 길', E'3번 루트', E'아마 이 루트에서 가장 높은 구간이 아닐까 해 이 길을 걸으면서 생각 정리를 해도 좋고 평소에 즐겨들었던 음악에 심취하며 걸어보는 것도 좋아 야경이 예쁜 다음 산책루트들을 위해 빌드업이라고 생각하고 천천히 걸어보자', 2),
              (8, E'인촌기념관', E'4번 루트', E'저녁에 보는 인촌 기념관의 뒤쪽은 왠지 모르게 외국의 한 성벽을 보는 듯한 기분이 들게 만들어줘\n특히 이 루트를 따라오면서 보이는 뒤쪽의 공터는 고즈넉한 분위기를 내주어서 사진찍기에도 아주좋아 공터 오른쪽으로 올라가는 길이 있지? 그 길로 올라가보면 석탑이 있어 석탑 앞 벤치에 앉아 올 한 해를 마무리하고 새 한 해를 기원하는 마음가짐을 가져보면 어떨까?', 2),
              (9, E'문과대 서관', E'5번 루트', E'서관 기준으로 왼쪽의 벤치들이 죽 모여있는 곳 바로 앞으로 가면 아름다운 야경을 마주할 수 있어 마치 정말로 호그와트가 연상되는 분위기를 만들어줘 여기도 사진 맛집이니 인생샷 한 번 건져가보는 건 어떨까?', 2),
              (10, E'sk 미래관', E'6번 루트', E'sk 미래관 실내로 먼저 들어가지 않고 오른쪽 야외 복도로 가면 조금 더 이쁜 분위기를 만끽할 수 있어\n 또, 복도를 들어가기 전 입구의 왼쪽 계단을 올라가면 멋진 경치를 볼 수 있으니 한 번 도전해보자!', 2),
              (11, E'고려대 정문', E'7번 루트', E'그래도 산책의 마무리는 뭐니뭐니해도 고려대 정문이겠지? 이쁜 우리 본관 건물 보면서 이번 산책은 여기서 끝마치도록 해볼까? 이 추천루트를 통해서 고려대 저녁 산책의 새로운 즐거움을 얻어갔기를 바랄게~', 2);

-- path 관련 쿼리:
-- pathID: 2 (파일: 추천루트01.xlsx)
INSERT INTO path (id, place_id, name, description)
       VALUES (2, 2, E'고려대의 역사를 알아보자!', E'고려대의 착공부터 현재까지 고려대의 역사를 답사 해보고픈 여러분들을 위한 루트!');
INSERT INTO path_point (id, x, y, path_id)
       VALUES (0, 886, 1706, 2),
              (1, 1190, 1783, 2),
              (2, 980, 1509, 2),
              (3, 913, 1279, 2),
              (4, 1508, 624, 2);
-- pathID: 3 (파일: 추천루트02.xlsx)
INSERT INTO path (id, place_id, name, description)
       VALUES (3, 2, E'저녁공기와 함께하는 고려대 산책', E'여기까지 가봐야 진짜 고대생이라고 할 수 있지~!');
INSERT INTO path_point (id, x, y, path_id)
       VALUES (5, 608, 1511, 3),
              (6, 322, 460, 3),
              (7, 893, 673, 3),
              (8, 1216, 1179, 3),
              (9, 1445, 1421, 3),
              (10, 1586, 1740, 3),
              (11, 1829, 1595, 3);

-- place 쿼리:
INSERT INTO place (id, name, description)
       VALUES (3, E'루브르 박물관', E'루브르 박물관은 프랑스 파리에 위치한 세계에서 가장 유명하고 방대한 박물관 중 하나입니다. 원래는 12세기에 성채로 건설되었으나, 16세기에 프랑스 왕실의 궁전으로 개조되었습니다. 1793년에 처음으로 공공 박물관으로 개방된 이후, 현재 루브르 박물관의 컬렉션은 약 38만 점에 이르며, 고대 문명에서부터 19세기 중반까지의 예술품을 아우르고 있습니다. \n\n루브르 박물관은 리슐리외관, 슐리관, 드농관으로 이루어져 있습니다. 이 세 곳의 모든 작품들을 하루만에 모두 보기에는 불가능할겁니다.\n\n처음이라 무얼 봐야하고 어디에 무엇이 있는지 모르는 여러분들의 조금 더 편한 루브르 여정을 위한 루브르 관람 가이드 지금부터 시작합니다.\n\n예상 소요시간 :3시간~4시간 ');

-- artwork 쿼리:
INSERT INTO art_work (id, name, summary, description, place_id)
       VALUES (0, E'카루셀 입구', E'카루셀 개선문 양 옆', E'루브르 박물관 입구는 여러 곳이 있는데 그 중 가장 유명한 피라미드 입구는 줄이 항상 길어 입장하는데에 시간이 다소 소요될 수 있습니다\n그래서 이번 루트는 비교적 줄이 짧은 카루셀 입구로 안내를 드리려 합니다. \n또한 카루셀 입구는 지하철역 ''팔레 루아얄-뮈제 뒤 루브르 역 (Palais Royal–Musée du Louvre station)''과 연결되어 있기도 하니 지하철에서 내려서 바로 입장하셔도 좋습니다\n\n카루셀 입구가 사용이 불가할 때에는,\n1. 루브르 피라미드 입구\n2. 리슐리외관 입구(피라미드 기준 왼쪽)\n을 사용하시면 됩니다', 3),
              (1, E'역 피라미드', E'I.M.Pei\n1989\n유리와 금속', E'루브르 박물관의 유명한 랜드마크이자 포토스팟이기도 한 역 피라미드입니다. \n루브르 역피라미드는 미국 건축가 I.M. Pei가 설계한 독특한 구조물로, 파리 루브르 박물관의 지하 쇼핑몰인 Carrousel du Louvre에 위치합니다. 이 유리와 금속으로 만들어진 역피라미드 형태는 바닥에 작은 돌 피라미드가 중앙에 자리 잡고 있어, 물이 떨어지는 듯한 시각적 효과를 줍니다. \n이 역피라미드를 방문하면 현대적인 디자인과 역사적인 배경이 어우러진 독특한 경험을 할 수 있습니다. 또한, 이 구조물이 위치한 Carrousel du Louvre 쇼핑몰에서는 쇼핑과 식사를 즐기면서 휴식을 취할 수도 있어, 루브르 박물관 방문의 일부로 즐기기에 좋습니다.', 3),
              (2, E'대형 스핑크스', E'작자 미상\n기원전 26세기 추정\n화강암', E'대형 스핑크스상은 고대 이집트 고왕국 시대에 화강암으로 제작된 스핑크스 대석상입니다. \n1825년 이집트 제21왕조와 제23왕조의 수도였던 타니스의 아문라 신전 유적에서 발견되었습니다. \n석상 자체는 훨씬 더 이른 시기에 만들어졌으나, 정확한 제작연대는 알 수 없어, 이르면 기원전 26세기 제4왕조 시대부터 늦으면 제12왕조 시기까지 다양한 설이 제기되고 있습니다.\n\n이집트의 스핑크스는 살아 있는 파라오의 상징으로, 몸은 사자 형상이며 얼굴은 왕의 얼굴을 가집니다. 왕궁이나 사원의 입구에 세워지며 도발하는 적을 눌러 죽이는 수호자로 인식되어왔습니다.\n\n이집트인들의 뛰어난 기술로 단단한 돌에 새겨진 상형문자와 표현들이 놀랍게도 보존되어 있어 아메넴하트 2세 (제12왕조), 메르넵타 (제19왕조), 셰숑크 1세 (제22왕조)의 이름이 현재까지도 남아있습니다.\n\n긴 시간 동안 많은 변화를 겪었음에도 불구하고 대석상이 여전히 단단하게 남아있는 등 이집트 문명의 문화에 경이로움을 자아내는 작품입니다.', 3),
              (3, E'함무라비 법전', E'작자 미상\n기원전 1755년~1750년경 추정\n현무암', E'함무라비 법전은 기원전 1792년에서 1750년에 바빌론을 통치한 함무라비 왕이 제정한 세계에서 가장 오래된 성문법으로 알려져 있습니다. 아카드어로 작성된 이 법전은 프랑스와 이란의 발굴팀에 의해 1901년에 수사에서 발견되었습니다. 이 돌기둥은 높이 2.25m로, 상단에는 부조가 새겨져 있고, 아래부분에는 아카드어 쐐기문자로 구성되어 있습니다. \n\n법전은 서문, 본문 282개조, 맺음말로 이루어져 있으며, 특히 사법 영역에서 종교를 떠나 법기술적인 규정을 발달시켰습니다. 채권법에서는 진보된 내용을 담고 있으며, 형법에서는 흔히들 알고 있는 ''눈에는 눈, 이에는 이''의 탈리오의 원칙이 지배하고 있습니다.\n\n함무라비 법전은 거의 원형대로 발견되어 "설형문자법계"의 연구를 촉진시켰으며, 12표법이나 헤브라이 법 등 여러 고대법의 비교법사적 연구를 발달시키는 데에 기여했습니다. 이 법전은 고대 문명의 법률 체계를 이해하고 연구하는 데에 중요한 자료로 평가되고 있습니다.', 3),
              (4, E'밀로의 비너스', E'작자 미상\n기원전 100년 경\n대리석', E'밀로의 비너스는 1802년 한 농부에 의해 밀로 섬에서 발견되어 ‘밀로의 비너스’라는 제목으로 불리게 되었습니다. 작품이 발굴된 이후 루브르 박물관 측에서는 빠른 시일 내에 전시하기 위해 서둘러 복원을 실시했습니다. 당시 철저한 고증이 이루어지지 않은 채 복원작업이 진행되어 1875년 2차 복원작업이 이루어졌습니다. 하지만 작품의 완전한 형태에 대한 미술사학자들의 의견이 일치하지 않아, 현재까지도 양팔이 없는 비너스 상으로 남아있습니다.\n\n발견 당시 이 여신상은 고전기(古典期)의 거장 브락시테레스의 원작이라고 떠들썩하였으나, 그 후 연구 결과 현재는 BC 2세기에서 BC 1세기 초에 제작되었으리라는 설이 유력합니다. 품위 있는 머리 부분이라든지 가슴에서 허리에 걸친 우아한 몸매의 표현에는 BC 4세기적인 조화를 보이기도 하지만, 두발(頭髮)의 조각과 하반신을 덮는 옷의 표현은 분명히 헬레니즘의 특색을 나타내고, 그 고전적인 자태는 헬레니즘의 극단적인 사실주의에 대한 반동으로, 고전 양식의 부활이라는 당시의 풍조에서 태어난 걸작입니다.', 3),
              (5, E'승리의 여신 니케', E'작자 미상\n기원전 190년경\n대리석', E'1863년 사모트라케섬에서 발견된 니케 조각상은 고대 그리스의 승리의 여신을 상징하며, 기원전 190년에 \n로도스섬과 사모트라케섬 사람들이 벌인 해전에서 이긴 로도스섬의 승전 기념물로 창조되었습니다. \n\n날개 달린 여성 형상인 니케는 뱃머리에서 바라보며 물살을 해치고 있는 모습, 흩날리는 옷, 날개 등이 섬세하게 표현되어 있습니다.\n초기에는 파손된 상태였지만 2차례의 발굴을 통해 뱃머리 부분과 파편들이 발견되었고, 루브르 박물관에서는 1884년 이후에 복원하여 전시 중입니다. 조각상은 두 날개가 펼쳐진 상태로, 불안한 해상에서의 동적인 느낌이 돋보입니다. \n\n승리의 여신 니케는 기원전 작품임에도 뛰어난 조각 기술과 현실적 표현으로 중세 유럽 작품과 비교해도 탁월한 미적 가치를 지니고 있다고 평가받고 있습니다.  이 작품은 루브르 박물관에서 모나리자와 함께 관람객을 맞이할만큼 대표 작품이며, 그 독특한 아름다움은 서양 미술의 영광으로 자리매김하고 있습니다.', 3),
              (6, E'나폴레옹 1세의 대관식', E'자크 루이 다비드\n1804년\n캔버스에 유화', E'1804년 7월 국민 투표에서 압도적인 지지를 받으며 프랑스의 황제가 된 나폴레옹은 같은 해 12월 2일 파리의 노트르담 대성당에서 성대한 대관식을 거행했습니다. 이 행사를 그림으로 기록하여 후대에 남기는 일은 이미 1799년에 제1통령의 미술 감독으로 임명된 바 있는 다비드에게 돌아갔습니다.\n\n다비드는 작업실에 종이 모형과 밀랍 인형을 설치하고 대관식의 주요 참석자들과 그들이 입었던 의상을 따로 꼼꼼하게 소묘하는 등 대관식의 분위기와 참석자들을 정확하게 재현하기 위해 많은 노력을 기울였습니다. 그러나 나폴레옹의 요구에 따라 실제로는 대관식에 참석하지 않은 나폴레옹의 어머니를 갤러리 중앙에 그려 넣었고, 대관식 당시 마흔이 넘은 황후 조제핀을 우아한 젊은 여성으로 묘사하기도 했습니다.\n\n 그림은 나폴레옹이 스스로 대관한 후에 황후가 될 조세핀에게 관을 씌워 주는 광경으로 교황 피우스 7세가 대관을 축복하고 있는 모습입니다. 이러한 화면 구성은 나폴레옹의 권력이 스스로의 힘에 의한 것이지 타인으로부터 수여받은 것이 아니라는 것을 암시합니다.', 3),
              (7, E'그랑드 오달리스크', E'장오귀스트도미니크 앵그르\n1814년\n캔버스에 유화', E'앵그르가 1814년에 제작한 작품인 "그랑드 오달리스크"는  캔버스에 유채로 그려졌으며, 중세 텍스트에서 비롯된 이슬람 여성의 이야기를 바탕으로 하고 있습니다.\n\n무슬림 여성에 대한 미술적 표현은 이슬람에서 이미지의 제작이 금지되어 있었기 때문에 근대 초기까지는 존재하지 않았습니다. 이 작품은 19세기 영국과 프랑스의 식민지 형성 시기에 등장한 것으로, 무슬림 여성의 이미지는 서구 백인 남성에 의해 왜곡되어 발전해왔습니다. 유럽 미술가들은 낭만주의 시각으로 오달리스크를 이국적이고 에로틱 이미지로 표현했으며, 비너스의 자세를 취한 백인으로 왜곡했습니다. 이슬람 식민지에 대해 유럽인의 미의식이 우월하다 여겼기 때문입니다.\n\n앵그르 역시 이 작품에서 오달리스크의 이국적인 소품과 전통적인 비너스 자세를 통해 무슬림 여성의 아름다움을 표현했습니다. 그랑드 오달리스크는 오리엔트 이미지에 대한 유럽 중심의 시각과 이에 따른 문화적 우월감과 자만심을 비추는 이데올로기로 인식되고 있습니다.', 3),
              (8, E'메두사호의 뗏목', E'테오도르 제리코\n1819년\n캔버스에 유화', E'메두사호의 뗏목은 1823년에 테오도르 제리코가 제작한 대표작 중 하나입니다. 이 작품은 1816년, 400명의 승객을 태우고 있었던 범주 전함 메두사호가 식민지로 향하는 도중 암초에 걸려 발생한 사고를 담아냈습니다.\n그림의 구도는 평면적 전개를 피하고 피라미드형 구조를 채택하여 희망과 감동의 초점을 강조했습니다.\n\n생존자들이 커다란 뗏목 위에서 겪은 고난과 싸움을 섬세하게 그려내었고, 뗏목이 대양을 항해하며\n생존자들의 피로 물든 싸움의 장면을 전하고 있습니다. 그 중에서도 구조선이 나타났을 때의 흥분된 순간은 특히 잘 묘사되어 있으며, 이를 통해 작가는 현장에서 벌어진 사건에 대한 생생한 경험을 전하고자 했습니다.\n실제로 작가 제리코는 작품 제작을 위해 생존자 전원과 만남의 시간을 가지거나, 시체를 화실로 가져다가\n경직 상태를 조사해  작품에  담아내는 등 현실적인 표현을 담아내고자 노력했습니다. \n\n이러한 노력으로 메두사호의 뗏목은 당시 사건의 비극적인 면모를 섬세하게 그려낸 인상적인 작품으로 기억되고 있습니다.', 3),
              (9, E'민중을 이끄는 자유의 여신', E'외젠 들라크루아, 1830년, 캔버스에 유화', E'이 작품은 1830년, 프랑스 파리에서 일어났던 7월 혁명의 모습을 그리고 있습니다. 1814년의 왕정복고로 루이 16세의 동생들인 루이 18세와 샤를르 10세가 차례로 왕위에 올랐으나 샤를르 10세가 입헌군주제를 거부하고 과거의 정치체제로 회귀하려는 움직임을 보이자 파리에서는 또다시 혁명이 일어나게 되었습니다. 1830년 7월 27일, 시민들은 시내 곳곳에 바리케이드를 설치하였고 군대와 시가전을 벌인 끝에 29일에는 시민들이 왕궁으로 진입하여 샤를르 10세는 결국 영국으로 망명하게 되었습니다.\n\n작품은 3일에 걸친 열띤 혁명 중 이틀째인 7월 28일의 파리 거리의 모습을 보여주고 있습니다. 작품의 구도는 고전적이고 안정적인 삼각형 구도를 취하고 있습니다. 그러나 인물들의 힘찬 움직임, 열정적인 색채의 사용, 시내 곳곳에 타오르는 불길과 연기의 묘사는 들라크루아가 추구했던 낭만주의 미술의 모습을 잘 보여주고 있습니다. 특히 중앙에서 혁명의 상징인 삼색기를 들고 민중을 이끌고 있는 자유의 모습은 고전적 미술에서 멀어진 모습을 보여줍니다. 건강하고 힘찬 모습의 여성은 과거의 그림에 주로 나타났던 아름답고 우아한 여성들과는 대비되는 모습으로 당시에는 ‘품위가 없다’는 비판을 받았습니다.', 3),
              (10, E'루이 14세', E'이아생트 리고\n1701\n캔버스에 유화', E'17세기 프랑스 왕 루이 14세의 초상화 "루이 14세"는 왕의 권력과 신성함을 상징적으로 나타내기 위한 작업이 더해진 작품입니다.\n\n온화하지만 힘 있는 표정의 루이 14세는 푸른빛과 금빛, 하얀색의 화려한 색채로 표현되어 있으며, 머리 뒤쪽 명암 처리로 인한 희미한 후광은 그를 예수처럼 신성하게 보이게 합니다. 작품에는 리게일리어(왕홀, 왕관, 정의의 손, 중세의 검)가 오른손에 쥐고 있고, 왼쪽 허리춤에는 중세의 검이 걸려있습니다. 이러한 리게일리어는 평소에는 생드니 성당에 보관되다가 대관식 때 꺼내져 왕의 권력과 신성을 나타내기 위해 사용되었습니다. 커튼 뒤의 옥좌, 옷, 쿠션, 탁자에는 백합 무늬가 수놓여 있으며, 백합은 프랑스 왕가의 상징으로 국가의 이야기와 연결됩니다. \n\n작품 속 정의의 여신 부조 등을 통해 루이 14세는 권력은 물론이고 정통성과 정의까지 갖춘 왕으로 나타내졌습니다. 왕의 위엄을 보여주듯 단상 위에서 관람자를 내려다보는 형태를 띄어 관람자에게 강한 인상을 남기고 있습니다.', 3),
              (11, E'카페 마를리', E'ㅤ', E'리슐리외관 2층에 자리하고 있는 카페 마를리는 테라스 자리에서 루브르 박물관의 전경을 한 눈에 확인할 수 \n있습니다. 또한 이 곳은 좋은 포토스팟이기도 하니 각자 인생샷을 건져가는 건 어떤가요? 카페 마를리에서 즐기는 커피 한 잔의 여유를 마지막으로 루브르 박물관 실내 관람의 여정을 장식해봅시다. 카페 바로 옆 계단을 통해 리슐리외관 1층 출구로 갈 수 있습니다.', 3),
              (12, E'유리 피라미드', E'I.M.Pei\n1989\n유리와 금속', E'단연코 루브르 박물관에서 가장 상징적인 이 건축물은 1989년에 완공된 구조물로 세계적으로 유명한 중국계 미국인 건축가 I.M. Pei에 의해 설계되었습니다. 유리피라미드는 높이가 약 21미터에 달하며, 673개의 유리판으로 구성되어 있습니다.\n\n이 현대적인 구조물은 루브르 박물관의 고전적인 건축과 대조를 이루며, 현대와 고전이 조화를 이루는 독특한 예술적 표현을 제공합니다. 유리피라미드는 자연광을 내부로 유입시켜 박물관의 로비를 밝게 비추고, 밤에는 내부에서 빛나는 아름다운 조명으로 방문객들에게 환상적인 경관을 제공합니다.\n\n이 유리피라미드는 처음에는 논란의 대상이었지만, 이제는 파리의 현대적인 상징으로 널리 인정받고 있습니다. 박물관을 방문하는 관광객들은 이 유리피라미드를 통해 루브르 박물관의 다양한 전시물로 이어지는 공간으로 들어갈 수 있으며, 이 구조물의 아름다움과 역사적인 루브르 박물관의 조화를 감상할 수 있습니다.', 3),
              (13, E'카루셀 개선문', E'Charles Percier, Pierre-François-Léonard Fontaine\n1808\n석재와 대리석', E'처음 입장하실 때 보신 이 카루셀 개선문 (Arc de Triomphe du Carrousel)은 나폴레옹 보나파르트가 1805년 아우스터리츠 전투에서의 승리를 기념하기 위해 1806년에 건설을 명령했습니다. 카루셀 개선문은 작은 규모지만, 로마의 콘스탄티누스 개선문에서 영감을 받아 설계되었습니다.\n\n이 개선문은 로마 건축양식을 따르며, 세 개의 아치와 섬세한 조각으로 장식되어 있습니다. 꼭대기에는 나폴레옹의 전투에서의 승리를 상징하는 사분마차가 자리 잡고 있습니다. 이는 원래 베네치아의 산 마르코 대성당에서 가져온 사분마차의 복제품입니다.\n\n개선문 주변은 툴레리 정원과 루브르 박물관으로 이어지는 아름다운 경관을 제공하며, 관광객들에게 파리의 역사와 예술을 가까이에서 경험할 수 있는 기회를 제공합니다. 이 개선문은 파리의 중요한 역사적 유산으로, 나폴레옹 시대의 영광과 프랑스의 예술적 전통을 대표하는 상징적인 건축물입니다. 이 개선문도 좋은 포토스팟이며, 뒤 쪽 퇼르리 정원을 마지막으로 루브르 박물관에서의 여정을 마무리할 수 있습니다.', 3),
              (14, E'퇼르리 정원', E'ㅤ', E'퇼르리 정원 (Tuileries Garden)은 파리 중심부에 위치한 역사적이고 아름다운 공공 정원입니다. 이 정원은 1564년에 퀸 캐서린 드 메디시스에 의해 처음 조성되었으며, 그 후 여러 차례에 걸쳐 개조되었습니다. 툴레리 정원은 프랑스 정원 양식의 대표적인 예로, 잘 정돈된 나무들, 넓은 산책로, 그리고 화려한 꽃밭들로 유명합니다.\n\n이 정원은 루브르 박물관과 콩코르드 광장 사이에 위치해 있으며, 세느 강과 인접해 있습니다. 정원 안에는 여러 개의 분수, 조각상, 그리고 두 개의 박물관인 오랑주리 박물관과 주 드 프름 박물관이 자리하고 있습니다.\n\n이 것으로 루브르 박물관 추천루트 안내를 마치도록 하겠습니다. 아무쪼록 좋은 첫 루브르의 경험이 되었으면 합니다.', 3);

-- path 관련 쿼리:
-- pathID: 4 (파일: 추천루트01.xlsx)
INSERT INTO path (id, place_id, name, description)
       VALUES (4, 3, E'첫 루브르 관람을 위한 추천 가이드', E'루브르가 처음이라면? 루브르 속성 완전정복!');
INSERT INTO path_point (id, x, y, path_id)
       VALUES (0, 1419, 985, 4),
              (1, 731, 2236, 4),
              (2, 3873, 3272, 4),
              (3, 4303, 3206, 4),
              (4, 4496, 3724, 4),
              (5, 4336, 2454, 4),
              (6, 4189, 2454, 4),
              (7, 4130, 2454, 4),
              (8, 3928, 2454, 4),
              (9, 4032, 2568, 4),
              (10, 3933, 2568, 4),
              (11, 4575, 2025, 4),
              (12, 4234, 2030, 4),
              (13, 1822, 996, 4),
              (14, 1249, 1007, 4);
