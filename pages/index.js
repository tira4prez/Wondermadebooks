export default function Home() {
  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>Wondermade Books</h1>
      <p style={{ textAlign: "center" }}>
        Personalized children’s books starring your child 📖
      </p>

      <div style={{ border: "1px solid #ddd", padding: 16, marginTop: 20 }}>
        <img
          src="https://via.placeholder.com/400x250"
          alt="Book"
          style={{ width: "100%" }}
        />
        <h3>My Magical Story</h3>
        <p>$29.99</p>
        <button style={{ width: "100%", padding: 10 }}>
          Customize Book
        </button>
      </div>
    </div>
  );
}
