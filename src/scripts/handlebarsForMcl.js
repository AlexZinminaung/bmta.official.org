let Source = document.getElementById("entry-template").innerHTML;
let template = Handlebars.compile(Source);
let schoolList = document.getElementById('mcl-information');

let context = {
    schools: [{
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