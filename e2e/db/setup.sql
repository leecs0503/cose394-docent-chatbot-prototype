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
       VALUES (1, 1, E'바쁘다 바빠 고대인!', E'- 2층 역사민족전시실 > 고미술전시실\n- 고미술전시실 출구 오른쪽 에스컬레이터를 타시면 3층 현대미술관이 나옵니다\n- 3층 현대미술전시실');
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
              (5, E'고려대 정문', E'1번 루트', E'고려대에 온 것을 환영해~! 고려대하면 떠오르는 건물 본관이 바로 눈앞에 훤히 보이지?\n 앞의 넓게 펼쳐져 있는 잔디 광장은 중앙광장이라고 해 여기는 학생들 뿐만 아니라 다른 많은 사람들도 사진을 찍으러 오는 좋은 포토 스팟이기도 해 \n특히 학생들은 중앙광장에서 돗자리를 깔고 맥주도 즐겨 마신다고 하니 다음 번엔 중맥(중광맥주)에도 도전해보는건 어떨까?', 2),
              (6, E'sk 미래관', E'2번 루트', E'sk 미래관 실내로 먼저 들어가지 않고 왼쪽 야외 복도로 가면 조금 더 이쁜 분위기를 만끽할 수 있어\n 또, 복도 끝을 나와 오른쪽의 계단을 올라가면 멋진 경치를 볼 수 있으니 한 번 도전해보자!', 2),
              (7, E'고려대 본관', E'3번 루트', E'정문을 지나면서도 봤겠지만 더 앞에서 보니 웅장하지? \n일제 시대 때 석조건물이라고는 조선총독부 이외에는 전혀 없었을 때의 건축된 석조 건물이야 여기서도 인생샷 하나 건져가보자고~', 2),
              (8, E'고려대 중앙도서관', E'4번 루트', E'1937년대에 건축된 이 건물은 옛 석조 건물의 분위기를 한껏 느낄 수 있어\n고려대는 흔히들 알고 있는 ''고연전'' 뿐만 아니라 특별한 날에 응원가라는 것을 부르면서 놀기도 해 그 중 ''석탑''이라는 응원가가 있는데, 이때 이 석탑은 고려대학교 중앙도서관 구관을 의미한다고 해!', 2),
              (9, E'인촌기념관', E'5번 루트', E'저녁에 보는 인촌 기념관의 뒤쪽은 왠지 모르게 외국의 한 성벽을 보는 듯한 기분이 들게 만들어줘\n특히 이 루트를 따라오면서 보이는 뒤쪽의 공터는 고즈넉한 분위기를 내주어서 사진찍기에도 아주좋아 공터 오른쪽으로 올라가는 길이 있지? 그 길로 올라가보면 석탑이 있어 석탑 앞 벤치에 앉아 올 한 해를 마무리하고 새 한 해를 기원하는 마음가짐을 가져보면 어떨까?', 2);

-- path 관련 쿼리:
-- pathID: 2 (파일: 추천루트01.xlsx)
INSERT INTO path (id, place_id, name, description)
       VALUES (2, 2, E'고려대의 역사를 알아보자!', E'- 안암역 1번출구에 나오셔서 직진후 좌회전하시면 내리막길이 있습니다\n- 민주광장\n- 418기념관\n- 민주광장을 끼고 오르막길을 올라가면 됩니다\n- 문과대 서관\n- 중앙도서관');
INSERT INTO path_point (id, x, y, path_id)
       VALUES (0, 886, 1706, 2),
              (1, 1190, 1783, 2),
              (2, 980, 1509, 2),
              (3, 913, 1279, 2),
              (4, 1508, 624, 2);
-- pathID: 3 (파일: 추천루트02.xlsx)
INSERT INTO path (id, place_id, name, description)
       VALUES (3, 2, E'저녁공기와 함께하는 고려대 산책', E'- 고려대 1번출구로 나오셔서 큰길을 끼고 우회전합니다\n- 고려대 정문\n- 차도를 끼고 돌면 sk미래관 야외 복도가 나옵니다\n- sk미래관\n- 고려대 본관\n- 중앙도서관\n- 언덕을 오르다 보면 작은 철문이 하나 있습니다\n- 좌회전 후 길을 따라 걸으면 우측에 작은 철문이 하나 있습니다\n- 인촌기념관\n');
INSERT INTO path_point (id, x, y, path_id)
       VALUES (5, 1561, 1413, 3),
              (6, 1212, 1544, 3),
              (7, 1109, 1084, 3),
              (8, 1472, 559, 3),
              (9, 690, 779, 3);
