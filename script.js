document.addEventListener('DOMContentLoaded', () => {
    const members = [
        { name: 'Sapphxre Winterfell Zera (UZI)', position: 'Player in Winterfell Zera', photo: 'pic_profile/369.png', link: 'profile_somchai.html' },
        { name: 'Albert Znine (Omega)', position: 'Player in Winterfell Znine', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/albert.znine' },
        { name: 'Armyz Winterfell Delta (Ezj)', position: 'Player in Winterfell Delta', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/arm.delta.2024' },
        { name: 'Killua Winterfell Delta (Omega)', position: 'Player in Winterfell Delta', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/Killuawtfdelta' },
        { name: 'Puud Sabudbob (Diamondonsnow)', position: 'Player in Diamondonsnow', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/puud.zera' },
        { name: 'Hell Ezj Sabudbob (Omega)', position: 'Player in Sabudbob', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/hell.smokepurpp' },
        { name: 'Jamemy Vega  (Winterfell)', position: 'Player in Winterfell Vega', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/jamemy.zewell' },
        { name: 'Mallow Btk', position: 'Player in Omega', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/mallow.btk' },
        { name: 'Solar X. Vongolay', position: 'Player in Vongolay', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/solarx.ngl' },
        { name: 'BxngGz Trydiff  (Omega)', position: 'Player in Omega', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/artee.trydiff' },
        { name: 'BungGot Winterfell (Support)', position: 'Player in Winterfell , Semipro', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/gotji.Semipro#' },
        { name: 'Jaywynn Unfair (Support)', position: 'Player in Winterfell , Unfair ,588', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/jaywynn.588#' },
        { name: 'Mikey Kingoftrap (Support)', position: 'Player in Kingoftrap', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/mike.diffstyle#' },
        { name: 'Nugreen Realchiphay', position: 'Player in Omega', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/nugreen.f.bolt#' },
        { name: 'Shiro Winterfell Layout', position: 'Player in Winterfell Layout', photo: 'pic_profile/369.png', link: 'https://www.facebook.com/profile.php?id=61576496625779#' },
    ];

    const memberList = document.getElementById('member-list');

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        // เพิ่ม div สำหรับข้อมูลสมาชิก (ชื่อและตำแหน่ง)
        const memberInfo = document.createElement('div');
        memberInfo.classList.add('member-info');
        memberInfo.innerHTML = `
            <h2>${member.name}</h2>
            <p>${member.position}</p>
        `;

        memberCard.innerHTML = `
            <img src="${member.photo}" alt="${member.name}">
        `;
        memberCard.appendChild(memberInfo); // เพิ่มข้อมูลสมาชิกเข้าไปในการ์ด

        // เพิ่มปุ่มลิงก์โปรไฟล์
        const profileBtn = document.createElement('a');
        profileBtn.className = 'member-link-btn';
        profileBtn.href = member.link;
        profileBtn.textContent = 'Facebook';
        memberCard.appendChild(profileBtn);

        memberList.appendChild(memberCard);
    });

});

