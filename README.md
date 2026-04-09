# 📚 প্রজেক্টের মূল ফাংশনালিটি (Core Logic)

এই প্রজেক্টে ব্যবহৃত প্রধান ফাংশনগুলো এবং তাদের কাজ নিচে দেওয়া হলো:

### ১. ডেটা ফেচিং (Data Fetching)
অ্যাপ্লিকেশন লোড হওয়ার সময় JSON ফাইল থেকে বইয়ের তথ্য সংগ্রহ করার জন্য এটি ব্যবহার করা হয়েছে।
```javascript
useEffect(() => {
    fetch('/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
}, []);
২. সর্টিং লজিক (Dynamic Sorting)
ইউজার যখন ড্রপডাউন থেকে রেটিং বা পেজ সংখ্যা সিলেক্ট করে, তখন এই useEffect লিস্টটিকে অটোমেটিক সাজিয়ে ফেলে।

JavaScript
useEffect(() => {
    let sorted = [...readList];
    if (sortBy === 'rating') {
        sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'pages') {
        sorted.sort((a, b) => b.totalPages - a.totalPages);
    }
    setDisplayBooks(sorted);
}, [sortBy, readList]);
৩. ডুপ্লিকেট চেক ও লিস্টে যোগ করা (Handle Lists)
একই বই যেন বারবার রিড লিস্টে বা উইশ লিস্টে যোগ না হয়, তা এই ফাংশনটি নিশ্চিত করে।

JavaScript
const handleMarkRead = (book) => {
    const isExist = readList.find(item => item.id === book.id);
    if (!isExist) {
        setReadList([...readList, book]);
        toast.success("সফলভাবে লিস্টে যোগ করা হয়েছে!");
    } else {
        toast.error("বইটি ইতিমধ্যে লিস্টে আছে।");
    }
};
৪. আইডি দিয়ে বই খুঁজে বের করা (Routing Logic)
URL থেকে আইডি নিয়ে নির্দিষ্ট বইটির বিস্তারিত তথ্য দেখানোর জন্য এই লজিকটি ব্যবহৃত হয়েছে।

JavaScript
const { id } = useParams();
const book = allBooks.find(b => b.id === parseInt(id));
প্রযুক্তিগত বৈশিষ্ট্য:

State Management: React Context API

Routing: React Router DOM

UI: Tailwind CSS & DaisyUI

Notifications: React Toastify