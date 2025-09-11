document.addEventListener('DOMContentLoaded', () => {
    const members = [
        { name: 'Sapphxre Winterfell Zera (UZI)', position: 'Player in Winterfell Zera', photo: 'pic_profile/Sphx.png', link: 'profile_somchai.html' },
        { name: 'Albert Znine (Omega)', position: 'Player in Winterfell Znine', photo: 'pic_profile/albert.jpg', link: 'https://www.facebook.com/albert.znine' },
        { name: 'Armyz Winterfell Delta (Ezj)', position: 'Player in Winterfell Delta', photo: 'pic_profile/arm.jpg', link: 'https://www.facebook.com/arm.delta.2024' },
        { name: 'Killua Winterfell Delta (Omega)', position: 'Player in Winterfell Delta', photo: 'pic_profile/killua.jpg', link: 'https://www.facebook.com/Killuawtfdelta' },
        { name: 'Puud Sabudbob (Diamondonsnow)', position: 'Player in Diamondonsnow', photo: 'pic_profile/puud.jpg', link: 'https://www.facebook.com/puud.zera' },
        { name: 'Hell Ezj Sabudbob (Omega)', position: 'Player in Sabudbob', photo: 'pic_profile/hell.jpg', link: 'https://www.facebook.com/hell.smokepurpp' },
        { name: 'Jamemy Vega  (Winterfell)', position: 'Player in Winterfell Vega', photo: 'pic_profile/jame.jpg', link: 'https://www.facebook.com/jamemy.zewell' },
        { name: 'Mallow Btk', position: 'Player in Omega', photo: 'pic_profile/mallow.jpg', link: 'https://www.facebook.com/mallow.btk' },
        { name: 'Solar X. Vongolay', position: 'Player in Vongolay', photo: 'pic_profile/milk.jpg', link: 'https://www.facebook.com/solarx.ngl' },
        { name: 'Artee Trydiff', position: 'Player in Omega', photo: 'pic_profile/artee.jpg', link: 'https://www.facebook.com/artee.trydiff' },
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