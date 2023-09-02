import Member from "./member"

export default function Hero() {
	const members = [
		{
			name: "Johana Hnízdilová",
			tel: "+420 607 440 744",
			email: "johanahnizdilova@gmail.com",
			photo: "johana.jpg",
			text: "<p>Johana Hnízdilová je studentkou ateliéru keramiky na Vysoké škole uměleckoprůmyslové. Jako jeden ze zakladatelů Hlinotéky se v současnosti intenzivně podílí na jejím rozvoji a vedení kurzů. Její tvorba přesahuje z precizního rukodělného hrnčířství do dalších uměleckých oblastí. Inspiruje se kresbou, grafitti, sochou, instalacemi, performancí, elektronickou hudbou či grafikou, kterou dříve studovala. Z grafiky vychází i důraz na ornament, linku či barevnost rozpoznatelný v Hnízdilové keramických dílech.</p>",
			socials: [
				{
					name: "IG",
					link: "johanahnizdilova"
				}
			],
			modal: true
		},
		{
			name: "Karolína Kučerová",
			tel: "+420 773 680 332",
			email: "karokuc@gmail.com",
			photo: "karolina.jpg",
			text: "<p>Karolína Kučerová, současně žijící v Praze, je umělkyně amerického původu s československými kořeny. Po nekonečném cestování její životní cestu určil jeden večerní kurz keramiky, kde poprvé pocítila silné propojení s materiálem. Od té doby se začala keramice intenzivně věnovat a v roce 2020 nastoupila do ateliéru Keramiky a porcelánu na pražské UMPRUM. V roce 2021, během pandemie covidu, spoluzaložila dílnu Hlinotéka. Na jaře roku 2022 pak vycestovala na studijní stáž v akademii umění a designu v Jeruzalémě, kde se učila technikám odlévání a foukání skla, dřevořezání i sochařství. Dovednosti práce s různými materiály rozvíjí i nyní po návratu. Mezi různými materiály u ní ovšem stále převládá keramika a to konkrétně tvorba funkčního luxusního nádobí točeného na hrnčířském kruhu. Ve své tvorbě čerpá inspiraci z japonského designu a každému kusu se věnuje s neutuchající pečlivostí a citem.</p>",
			socials: [
				{
					name: "IG",
					link: "karokuc"
				}
			],
			modal: true
		},
		{
			name: "Borek Smažinka",
			tel: "+420 777 022 934",
			email: "borek.smazinka@gmail.com",
			photo: "borek.jpg",
			text: "<p>Borek Smažinka je absolventem Katedry fotografie na FAMU. Ve své práci se soustředí na vytváření svébytného světa opírajícího se o základy prvků fantasy žánru a pro který hledá vlastní estetický jazyk inspirovaný organickými přírodními strukturami. Své téma zpracovává napříč médii od digitální grafiky a fotografie, přes malbu až po práci s nejrůznějšími materiály, jako je beton, sádra nebo keramika. Pro jeho tvorbu je nejzásadnější práce s fialovou, červenou, zelenou a růžovou barvou, pro které hledá nové vzájemné vazby a vytváří jejich vlastní psychologii.</p>",
			socials: [
				{
					name: "IG",
					link: "borek_s"
				}
			],
			modal: true
		},
	]
	const residents = [
		{
			name: "Markéta Špundová",
			tel: "",
			email: "",
			photo: "marketa.jpg",
			text: "<p>Markéta Špundová bsolvovala bakalářské studium v oboru Keramika a porcelán na pražské Umprum. Nyní zde pokračuje v navazujícím studiu magistra. Ve své tvorbě propojuje různorodá témata od těch naivních a radostných po ty komplexnější a tíživá, u těch ale nikdy nemizí hravost a optimismus. Keramika je pro ni mateřský jazyk a nachází v ní arteterapeutický zážitek. I proto s oblibou pořádá modelovací kurzy, u kterých si odpočinete ale naučíte se i ovládnout techniku a porozumět možnostem materiálu. Keramiku se nebojí kombinovat i s textilií a jinými materiály. Momentálně je na stáži v ateliéru Textilu na Umprum. Minulý rok jste mohli její tvorbu potkat na společné výstavě jak v Moravanech nad Váhom tak v Praze ve studiu Prám. V březnu tohoto roku bude vystavovat v galerii Nika a v českém centru v Bulharsku. V dubnu pak bude vystavovat na milánském Triennále v Salone de Mobile.</p>",
			socials: [
				{
					name: "IG",
					link: "marketaspundova"
				}
			],
			modal: true
		},
		{
			name: "Olga Osnach",
			tel: "",
			email: "",
			photo: "olga.jpg",
			text: "<p></p>",
			socials: [],
			modal: false
		},
		{
			name: "Timur Aloev",
			tel: "",
			email: "",
			photo: "timur.jpg",
			text: "<p>Timur Aloev je všestranný umělec. Ve své tvorbě krom keramiky zabývá také grafikou, ilustrací a malbou. Součástí Hlinotéka kolektivu se stal v roce 2022. Jeho tvorbu jste v minulosti mohli vidět například na jeho solo výstavě v Holešovické šachtě nebo v Meetfactory. Inspiraci nachází v gotické architektuře a secesních ornamentech. Fascinuje ho jak tyto architektonické prvky mistrně zachycují pohyb ve své absolutní statičnosti. Stejný pocit se pak snaží ve svém díle navodit. Objekty, které vytváří, jsou plné biomorfních rozvilinových ornamentů. Projevují se v jeho tvorbě jako rostliny, andělské bytosti, ozdobné abstraktní motivy nebo jejich různé kombinace.</p>",
			socials: [
				{
					name: "IG",
					link: "introvirtual90666"
				}
			],
			modal: true
		},
	]
	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="flex flex-col px-24 py-20 max-w-8xl mx-auto">
				<div className="flex flex-col">
					<h2 className="text-2xl font-bold leading-tight">Členové dílny</h2>
					<div className="py-4 mb-20 grid grid-cols-3 gap-4">
						{members.map((member, index) => (
							<Member key={index} member={member} />
						))}
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-bold leading-tight">Rezidenti</h2>
					<div className="py-4 grid grid-cols-3 gap-4">
						{residents.map((resident, index) => (
							<Member key={index} member={resident} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}