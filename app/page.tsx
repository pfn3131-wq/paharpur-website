import React from 'react';

export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      margin: '0', 
      minHeight: '100vh', 
      paddingBottom: '20px',
      position: 'relative',
      backgroundImage: 'url("/paharpur-buddhist-vihara.jpg")',

      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      
      {/* জাপসা করার জন্য ওভারলে */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(244, 247, 246, 0.85)',
        zIndex: 0
      }} />

      {/* মেইন কন্টেন্ট */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <header style={{ backgroundColor: '#004a99', color: 'white', padding: '30px 20px', textAlign: 'center' }}>
          <img src="/pcn-logo.png" alt="Paharpur Logo" style={{ width: '80px', height: '80px', marginBottom: '10px', borderRadius: '50%', backgroundColor: 'white', objectFit: 'cover' }} />
          <h1 style={{ margin: '0', fontSize: '24px' }}>Paharpur Fiber Net & LPG Gas</h1>
          <p style={{ marginTop: '5px', fontSize: '14px' }}>আপনার নির্ভরযোগ্য ইন্টারনেট ও জ্বালানি সেবার ঠিকানা</p>
        </header>

        <main style={{ maxWidth: '600px', margin: '20px auto', padding: '0 15px' }}>
          {/* ইন্টারনেট প্যাকেজ সেকশন */}
          <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
            <h2 style={{ color: '#004a99', borderLeft: '4px solid #004a99', paddingLeft: '10px', fontSize: '20px' }}>ইন্টারনেট প্যাকেজ</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', fontSize: '14px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <th style={{ padding: '10px', border: '1px solid #eee' }}>প্যাকেজ</th>
                  <th style={{ padding: '10px', border: '1px solid #eee' }}>গতি</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '10px', border: '1px solid #eee' }}>স্ট্যান্ডার্ড</td><td style={{ padding: '10px', border: '1px solid #eee' }}>২০ Mbps</td></tr>
                <tr><td style={{ padding: '10px', border: '1px solid #eee' }}>প্রো</td><td style={{ padding: '10px', border: '1px solid #eee' }}>৫০ Mbps</td></tr>
                <tr><td style={{ padding: '10px', border: '1px solid #eee' }}>আল্ট্রা</td><td style={{ padding: '10px', border: '1px solid #eee' }}>১০০ Mbps</td></tr>
              </tbody>
            </table>
          </section>

          {/* LPG অর্ডার সেকশন */}
          <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', marginBottom: '20px', textAlign: 'center' }}>
            <h2 style={{ color: '#004a99', textAlign: 'left', fontSize: '20px' }}>LPG গ্যাস অর্ডার</h2>
            <img src="/lpg.png" alt="LPG Cylinder" style={{ width: '100%', maxWidth: '250px', margin: '15px 0', borderRadius: '8px' }} />
            <p style={{ fontSize: '14px', marginBottom: '20px' }}>দ্রুত ডেলিভারির জন্য নিচে ক্লিক করুন:</p>
            <a href="https://wa.me/8801717852946?text=হ্যালো, আমি এলপিজি গ্যাস সিলিন্ডার অর্ডার করতে চাই।" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '15px', backgroundColor: '#25D366', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px' }}>WhatsApp-এ অর্ডার করুন</a>
          </section>

          {/* যোগাযোগ সেকশন */}
          <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#004a99', fontSize: '20px' }}>যোগাযোগ</h2>
            <p style={{ fontSize: '14px' }}>ঠিকানা: পাহাড়পুর<br />হেল্পলাইন: <strong>০১৭১৭৮৫২৯৪৬, ০১৩৩৬৫৭০৯৩৬</strong></p>
          </section>
        </main>

        <footer style={{ textAlign: 'center', fontSize: '12px', color: '#555', marginTop: '20px' }}>© 2026 Paharpur Fiber Net & LPG Gas</footer>
      </div>
    </div>
  );
}
