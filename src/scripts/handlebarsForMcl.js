let Source = document.getElementById("entry-template").innerHTML;
let template = Handlebars.compile(Source);
let schoolList = document.getElementById('mcl-information');

let context = {
    schools: [

    {
            schoolName: "48-km",
            principal: "Soe Moe Zaw",
            grade:"Nursery - Grade 6",
            address: '48-KM Village, Phop Phra',
            src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.998429491328!2d98.83701549999999!3d16.4756172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ddf3acfc5e65d7%3A0x2c10905b34f1e24e!2s48KM%20Learning%20Center!5e0!3m2!1sen!2sth!4v1717087250813!5m2!1sen!2sth"
    },
        
    {
        schoolName: "Avoda",
        principal: "Soe Moe Zaw",
        grade: "unknow",
        address: '179, ม-2, แม่ตาว, แม่สอด, ตาก',
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.6373573403425!2d98.5743511!3d16.6950209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd996f24b63185%3A0xc6a185da7f7703f0!2z4Lih4Li54Lil4LiZ4Li04LiY4Li04Lit4LmC4Lin4LiU4LmJ4Liy!5e0!3m2!1sen!2sth!4v1716198120448!5m2!1sen!2sth"

    },
    {
        schoolName: "B.H.S.O.H",
        principal: "Naw Naw",
        grade: "Grade 1 - Grade 12",
        address: '181,Moo 11,Mae Pa Mae Sot Tak Thailand',
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3820.335639876273!2d98.5588931!3d16.7599688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda1929465ac95%3A0x92dfdcd262f89d5d!2sBHSOH%20Learning%20Center!5e0!3m2!1sen!2sth!4v1716205870968!5m2!1sen!2sth"

    },
    {
        schoolName: "B.L.S.O",
        principal: "Daw Shwe Sin Win",
        grade:"KG - Grade 9",
        address: '205/2 Sripanich Road Mae Sot Tak Province',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.428555054847!2d98.57954850000002!3d16.705455399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd99be07948137%3A0x96e27d1a2954ce3a!2sBLSO%20migrant%20Learning%20Center!5e0!3m2!1sen!2sth!4v1716207178186!5m2!1sen!2sth%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
    },
    {
        schoolName: "C.D.C",
        principal: "Mahn Shwe Hnin ",
        grade:"Nursery, Grade 1 - Grade 12, GED",
        address: '927,Moo1,Thasailoud,Mae Sot,Tak Province',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2719397554433!2d98.54591669999999!3d16.713277799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd9f6b6ae04127%3A0xe5ae421f2e54b983!2sCDC%20School%2C%20Mae%20Sot!5e0!3m2!1sen!2sth!4v1716207362775!5m2!1sen!2sth"
    },
    {
        schoolName: "C.D.T.C",
        principal: "Saw Tun Naung",
        grade:"Nursery - Grade 9",
        address: '369 Moo 4, Huay Ka Loke, Mae Pa, Mae Sot, Tak, Thailand',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.149556153616!2d98.53393439999999!3d16.7692333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda17926b2593b%3A0x987986b7402444c0!2sCDTC%20Learning%20Center!5e0!3m2!1sen!2sth!4v1716207589920!5m2!1sen!2sth"
    },
    {
        schoolName: "Heavenly Home",
        principal: "Naw Lily",
        grade:"Nursery - Grade 10",
        address: '165, Moo 2, Soi 2, Mae Pa, Mae Sot, Tak, 63110, Thailand',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.4476617078412!2d98.5780628!3d16.7543892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda380d31840a9%3A0xa0e68ee1dd0100f7!2sHeavenly%20home%20Learning%20Center!5e0!3m2!1sen!2sth!4v1716207992539!5m2!1sen!2sth" 
    },

    {
        schoolName: "Home",
        principal: "Daw Kay Thi Mon",
        grade:"Nursery - Grade 4, Grade 6, Grade 8",
        address: 'Pho Phra',
        src:"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d30617.42726204814!2d98.7514484!3d16.4157631!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI0JzU0LjEiTiA5OMKwNDUnNTAuNSJF!5e0!3m2!1sen!2sth!4v1716300370261!5m2!1sen!2sth"
    },
    {
        schoolName: "Kaw Tha Blay",
        principal: "Saw Tun Naung",
        grade:"Unknown Grade",
        address: '245 Moo 9,Taung Tam,Mae Tan,Tha Song Yang,Tak,63150',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.8698862160195!2d98.20224879999999!3d17.2735287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dce76bc3455669%3A0x30080a88e622caf2!2sKaw%20Tha%20Blay%20Learning%20Center!5e0!3m2!1sen!2sth!4v1716300507859!5m2!1sen!2sth"
    },
    {
        schoolName: "Light",
        principal: "Daw Thet Thet Zaw",
        grade:"Nursery, Grade 1 - Grade 3, Grade 5, Grade 6",
        address: 'Mae Pa, Moo-10,Cow market',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8770864343337!2d98.55140633386291!3d16.73882923327202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda152daef7edd%3A0xeb6916df6402318d!2zTGlnaHQgTGVhcm5pbmcgQ2VudGVy4YCh4YCc4YCE4YC64YC44YCb4YCx4YCs4YCE4YC64YCb4YC94YCx4YC34YCV4YC84YCx4YCs4YCE4YC64YC44YCZ4YC84YCU4YC64YCZ4YCs4YCA4YC74YCx4YCs4YCE4YC64YC4!5e0!3m2!1sen!2sth!4v1716300671494!5m2!1sen!2sth"
    },
    {
        schoolName: "Love",
        principal: "Daw Thae Mar Tun",
        grade:"Nursery - Grade 8",
        address: 'Saung Kwal Saung, Mae Sot Tak ',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.118080162663!2d98.5520803!3d16.720959099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd9f1c5dc529a1%3A0x33c9d784ae0a0756!2sLove%20Learning%20Center!5e0!3m2!1sen!2sth!4v1717080796871!5m2!1sen!2sth"
    },
    {
        schoolName: "Love and Care",
        principal: "Grace Tun",
        grade:"KG, Grade 3 - Grade 12, Pre GED",
        address: 'No.52,Moo(4),Huay kaloke,Mae Pa Tak Thailand',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.3826406142157!2d98.5473109!3d16.757628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda16cd75da483%3A0xc9bd1da4ec7d5ffb!2sLove%20and%20Care%20learning%20center!5e0!3m2!1sen!2sth!4v1717081082139!5m2!1sen!2sth" 
    },
    {
        schoolName: "MACC",
        principal: "Chaung Koo",
        grade:"KG - Grade 6",
        address: '668 Moo1,Phra That Pha Dang A, Mae Sot Tak 63110 ',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6577935216064!2d98.6028297!3d16.693999299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd9945509364b9%3A0x9d1e9e679cfa65bf!2sMae%20Sot%20Adventist%20Community%20Center.(M.%20A.%20C.%20C.%20)!5e0!3m2!1sen!2sth!4v1717081413136!5m2!1sen!2sth" 
    },
    {
        schoolName: "Mae Sot Manna",
        principal: "Esther D' Castro",
        grade:"KG - Grade 5, Grade 7, Grade 8",
        address: '239/5 , Sripanit Road, Mae Sot, Tak, Thailand',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4791759076984!2d98.5835032!3d16.7029263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd98c5f373c11d%3A0xfcb96129cee0ca42!2smanna%20school!5e0!3m2!1sen!2sth!4v1717081899841!5m2!1sen!2sth"
    },
    {
        schoolName: "Min Thu Won",
        principal: "Ko Tay",
        grade:"KG - Grade 6",
        address: 'BatMae Ku Niyoung,Moo12,tanpon Mae Ku,Thailand',
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3822.601034805394!2d98.6203814!3d16.6467806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd9962bc4d17df%3A0x3b744606f55e94eb!2sMin%20Thu%20Won%20School!5e0!3m2!1sen!2sth!4v1717082035690!5m2!1sen!2sth" 
    },
    {
        schoolName: "Minmahaw",
        principal: "U Ye Min Htike",
        grade:"GED, Pre GED",
        address: 'No.201/105,Sriphanich Road,Htong Htaung,Mae Sot Tak Thailand',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.378158985528!2d98.5801134!3d16.707972899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3118a593c0fe4959%3A0xd5f4bda05c9baeee!2sMinmahaw%20Higher%20Education%20Program!5e0!3m2!1sen!2sth!4v1717082150850!5m2!1sen!2sth" 
    },
    {
        schoolName: "Morning Glory",
        principal: "Precious",
        grade:"KG - Grade 8",
        address: '416.Moo10,Mae Kud Lawang Mae Sot Thailand',
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d341.0014116556704!2d98.59014077510226!3d16.798932466421626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda3abb06bd677%3A0x6388caf56982d1f9!2sMorning%20Glory%20School!5e0!3m2!1sen!2sth!4v1717082330964!5m2!1sen!2sth" 
    },
    {
        schoolName: "Morning Glory (Forgotten)",
        principal: "Nid Pattaranan ",
        grade:"KG, Grade 1",
        address: '479,Moo 9',
        src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d237.74384960090208!2d97.92062338237706!3d17.55987126662422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sth!4v1717083438272!5m2!1sen!2sth"

    },
    {
        schoolName: "Nam Tok",
        principal: "U Aung Win",
        grade:"KG - Grade 6",
        address: 'Ban Mai,Mae Sot,Tak,Thailand',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.097483495713!2d98.6837147!3d16.571600099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd904220c0d8a9%3A0xe16f539c753efae8!2z54CR5biD5a2457-S5Lit5b-D!5e0!3m2!1sen!2sth!4v1717083588718!5m2!1sen!2sth"
    },
    {
        schoolName: "Naung Bo Den",
        principal: "U Poe Zaw",
        grade:"Nursery - Grade 10",
        address: 'Moo5, Maepa',
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1909.9786790133921!2d98.5074686!3d16.778797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda1c1c1bb878b%3A0xf9f3910c2aa890d6!2sNaung%20Bo%20Den%20Learning%20Center!5e0!3m2!1sen!2sth!4v1717083703391!5m2!1sen!2sth"

    },
    {
        schoolName: "New Blood",
        principal: "U Zaw Lwin Oo",
        grade:"Nursery - Grade 4, Grade 6, 7, GED, Pre GED, Other training",
        address: 'Moo7, Naung Bwa, Mae Pa, Mae Sot, Tak, 63110, Thailand',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.8672404440817!2d98.615365!3d16.733474699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda34c4cc453db%3A0xecd838208dbfbe79!2sNew%20Blood%20High%20School!5e0!3m2!1sen!2sth!4v1717085175977!5m2!1sen!2sth"
    },
    {
        schoolName: "New Wave",
        principal: "U Zaw Htet",
        grade:"Nursery - Grade 9, Grade 11",
        address: 'NearMakho,Moharjili,Mae Sot',
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.3931834912532!2d98.5656808!3d16.7072224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd9f341bde4189%3A0xd89bb37a84daa57d!2sNew%20Wave%20School!5e0!3m2!1sen!2sth!4v1717085329720!5m2!1sen!2sth" 
    },
    {
        schoolName: "Parami",
        principal: "Skay Lar",
        grade:"KG-Grade 10",
        address: 'Mae Pa, Mae Sot District, Tak 63110',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.7823486684842!2d98.5692474!3d16.737708299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda1fefd16b3bd%3A0x81571c0a83872971!2sParami%20School!5e0!3m2!1sen!2sth!4v1717085620484!5m2!1sen!2sth"
    },
    {
        schoolName: "Pyo Khinn",
        principal: "Mai Mar Mar Yi",
        grade:"Nursery - Grade 7",
        address: 'Mae Sot-Mae TowRd',
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.5522668760204!2d98.5697121!3d16.6992739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd9f7c123b052d%3A0xd27affbe52b5fa9a!2sPyo%20Khin%20Learning%20Center!5e0!3m2!1sen!2sth!4v1717085753418!5m2!1sen!2sth" 
    },
    {
        schoolName: "Rocky Mountain",
        principal: "Mar Nay Soe",
        grade:"KG - Grade 4",
        address: 'N0.830 Moo1. Mae Tao Tha Sai Luat',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5594526560158!2d98.49522280000001!3d16.748819299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dda1ba6555a38b%3A0x8e7d94d5af5ee22f!2sMae%20taw%20Grace%20Church%20and%20Rocky%20Mountain%20learning%20Centre-1!5e0!3m2!1sen!2sth!4v1717085989373!5m2!1sen!2sth"
    },
    {
        schoolName: "Shwe Thazin",
        principal: "Khaing Kyaw Win",
        grade:"KG - Grade 6",
        address: 'No 552, Moo 8, Phrathat Phradam, Mae Sot, Tak, Thailand',
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d955.5827586763443!2d98.6126423!3d16.6603101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd990fbf1e0cd5%3A0x50ccbcd77faeaa31!2z4Lir4LmJ4Lit4LiH4LmA4LiK4LmI4LiyIOC4mOC4meC4seC4j-C4kOC4sg!5e0!3m2!1sen!2sth!4v1717086198186!5m2!1sen!2sth"

    },
    {
        schoolName: "Sky Blue",
        principal: "U Ye Lay",
        grade:"Nursery - Grade 6",
        address: 'Moo 10, Mun',
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3820.949846320325!2d98.529742!3d16.7293541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd9f1e2b03a80b%3A0x15f05c46422df94f!2sSky%20blue!5e0!3m2!1sen!2sth!4v1717086343036!5m2!1sen!2sth"
    },
    {
        schoolName: "Sun Shine",
        principal: "Mrs. Noeko Chukrohini",
        grade:"KG - Grade 12 ",
        address: 'Tha Song Yaung ',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.055235259764!2d98.0375873!3d17.4570702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dcc769e845ce57%3A0xb1bf95e633eb95e2!2sSunshine%20Orchard%20Learning%20Center!5e0!3m2!1sen!2sth!4v1717086488707!5m2!1sen!2sth"
    },
    {
        schoolName: "Thoo Mweh Khee",
        principal: "Saw Pwaydoh",
        grade:"Grade 1 - Grade 12, Other training",
        address: '351-Moo (3) T phopphra,A Phopphra J.Tak',
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3827.8422480580634!2d98.680254!3d16.3819965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd886a58c3c1d7%3A0x50bbc2b0964bf678!2sThoo%20Mweh%20Khee%20Learning%20Center!5e0!3m2!1sen!2sth!4v1717086620159!5m2!1sen!2sth"
    },
    {
        schoolName: "White",
        principal: "Mrs Khaing Khaing Tun",
        grade:"KG - Grade 5, Grade 7, Grade 9",
        address: '5 street,48 Km,Phop Phra',
        src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3825.934849043091!2d98.8344801!3d16.4788363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ddf3e222980625%3A0x72f4b6ad1e71e757!2sWHITE%20Learning%20Center!5e0!3m2!1sen!2sth!4v1717087155166!5m2!1sen!2sth" 
    },
    // {
    //     schoolName: "",
    //     principal: "",
    //     grade:"",
    //     address: '',
    //     src:""
    // }


]
}

let html = template(context);
schoolList.innerHTML = html;