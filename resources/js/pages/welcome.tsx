import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Head title="Panduan Freelance & Coding Untuk Developer Indonesia">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700" rel="stylesheet" />
                <meta name="description" content="Sumber daya lengkap bagi developer Indonesia untuk memulai karir freelance, belajar coding, dan mengakses produk digital." />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
                {/* Navigation */}
                <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/50 z-50 dark:bg-slate-900/90 dark:border-slate-700/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">DC</span>
                                </div>
                                <span className="font-semibold text-slate-800 dark:text-slate-200">DevCode Indonesia</span>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-slate-600 hover:text-slate-800 px-4 py-2 rounded-lg font-medium transition-colors dark:text-slate-300 dark:hover:text-slate-100"
                                        >
                                            Masuk
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                                        >
                                            Daftar
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div 
                                className="text-center lg:text-left"
                                style={{
                                    transform: `translateY(${scrollY * 0.1}px)`,
                                    opacity: 1 - scrollY * 0.001
                                }}
                            >
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6 leading-tight">
                                    Gabung dengan{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                                        Ratusan Developer Indonesia
                                    </span>{' '}
                                    yang Menghasilkan Uang dari{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">
                                        Coding & Freelance
                                    </span>
                                </h1>
                                
                                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                    Sumber daya lengkap untuk memulai karir freelance, belajar coding, dan mengakses produk digital berkualitas tinggi.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                        >
                                            🚀 Lanjutkan Perjalanan
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route('register')}
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                            >
                                                🚀 Mulai Sekarang Gratis
                                            </Link>
                                            <Link
                                                href={route('login')}
                                                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                                            >
                                                💼 Sudah Punya Akun?
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                            
                            <div className="relative">
                                <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-slate-500">developer-indonesia.js</span>
                                    </div>
                                    <div className="font-mono text-sm">
                                        <div className="text-purple-600 dark:text-purple-400">const</div>
                                        <div className="text-blue-600 dark:text-blue-400 ml-2">penghasilan = {'{'}</div>
                                        <div className="text-green-600 dark:text-green-400 ml-4">freelance: '50jt+/bulan',</div>
                                        <div className="text-green-600 dark:text-green-400 ml-4">remote: '25jt+/bulan',</div>
                                        <div className="text-green-600 dark:text-green-400 ml-4">produk: '100jt+/tahun'</div>
                                        <div className="text-blue-600 dark:text-blue-400 ml-2">{'};'}</div>
                                        <div className="mt-4 text-orange-600 dark:text-orange-400">// Mulai perjalananmu! 🇮🇩</div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                                <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kategori Konten Utama */}
                <section className="py-20 bg-white/50 dark:bg-slate-800/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                                Sumber Daya Lengkap untuk Developer Indonesia
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300">
                                Dari panduan pemula hingga tools profesional
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Artikel */}
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl">📚</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Artikel & Tutorial</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-6">
                                    Panduan lengkap dari basic coding sampai cara daftar Fiverr dan membangun portofolio yang menarik.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center text-slate-600 dark:text-slate-300">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Cara Memulai Freelance di Fiverr
                                    </li>
                                    <li className="flex items-center text-slate-600 dark:text-slate-300">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Membuat Portofolio Developer
                                    </li>
                                    <li className="flex items-center text-slate-600 dark:text-slate-300">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Tips Negosiasi Harga Proyek
                                    </li>
                                </ul>
                                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200">
                                    Baca Artikel 📖
                                </button>
                            </div>

                            {/* Tools */}
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl">🛠️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Tools Gratis</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-6">
                                    Alat bantu gratis untuk mempermudah pekerjaan freelance dan development sehari-hari.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center text-slate-600 dark:text-slate-300">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Kalkulator Tarif Freelance
                                    </li>
                                    <li className="flex items-center text-slate-600 dark:text-slate-300">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Generator Invoice
                                    </li>
                                    <li className="flex items-center text-slate-600 dark:text-slate-300">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        Time Tracker
                                    </li>
                                </ul>
                                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200">
                                    Akses Tools 🔧
                                </button>
                            </div>

                            {/* Produk Digital */}
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl">💎</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Produk Digital</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-6">
                                    Template, komponen UI, dan e-book berkualitas tinggi untuk mempercepat development.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center text-slate-600 dark:text-slate-300">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                        Template HTML Premium
                                    </li>
                                    <li className="flex items-center text-slate-600 dark:text-slate-300">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                        Komponen React/Vue
                                    </li>
                                    <li className="flex items-center text-slate-600 dark:text-slate-300">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                        E-book Freelance Guide
                                    </li>
                                </ul>
                                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200">
                                    Lihat Produk 💼
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimoni */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                                Kata Developer Indonesia Lainnya
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300">
                                Mereka sudah membuktikan kesuksesannya
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                        A
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-slate-800 dark:text-slate-100">Ahmad Rizki</h4>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm">Full-stack Developer, Jakarta</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    "Panduan di DevCode membantu saya mendapat klien pertama di Fiverr dalam 2 minggu! Sekarang penghasilan freelance saya 30jt/bulan."
                                </p>
                                <div className="flex text-yellow-400">
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                                        S
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-slate-800 dark:text-slate-100">Siti Nurhaliza</h4>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm">Frontend Developer, Bandung</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    "Tools kalkulator tarif sangat membantu saya menentukan harga yang tepat. Tidak lagi undervalue karya sendiri!"
                                </p>
                                <div className="flex text-yellow-400">
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                        D
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-slate-800 dark:text-slate-100">Dimas Pratama</h4>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm">Mobile Developer, Surabaya</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    "Template dan komponen UI premium di sini top banget! Proyek saya jadi lebih cepat selesai dan client senang."
                                </p>
                                <div className="flex text-yellow-400">
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter & CTA */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Jangan Sampai Ketinggalan Update Terbaru!
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Dapatkan tips, tutorial, dan tools terbaru langsung di inbox Anda
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
                            <input
                                type="email"
                                placeholder="Masukkan email Anda"
                                className="flex-1 px-6 py-4 rounded-xl border-0 text-slate-800 placeholder-slate-500 focus:ring-4 focus:ring-white/20 outline-none"
                            />
                            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                                Berlangganan 📧
                            </button>
                        </div>
                        
                        {!auth.user && (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={route('register')}
                                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
                                >
                                    🚀 Mulai Gratis Sekarang
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
                                >
                                    💼 Login
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-slate-900 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="col-span-2">
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold">DC</span>
                                    </div>
                                    <span className="font-bold text-xl">DevCode Indonesia</span>
                                </div>
                                <p className="text-slate-300 mb-6 max-w-md">
                                    Platform lengkap untuk developer Indonesia yang ingin sukses di dunia freelance dan coding. 
                                    Bergabunglah dengan komunitas ribuan developer lainnya!
                                </p>
                                <div className="flex space-x-4">
                                    <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                                        📘
                                    </button>
                                    <button className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                                        🐦
                                    </button>
                                    <button className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors">
                                        📷
                                    </button>
                                    <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors">
                                        💬
                                    </button>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-4">Navigasi</h4>
                                <ul className="space-y-2 text-slate-300">
                                    <li><a href="#" className="hover:text-white transition-colors">🏠 Beranda</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">📚 Artikel</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">🛠️ Tools</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">💎 Produk</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">👥 Komunitas</a></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-4">Bantuan</h4>
                                <ul className="space-y-2 text-slate-300">
                                    <li><a href="#" className="hover:text-white transition-colors">❓ FAQ</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">📞 Kontak</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">🔒 Kebijakan Privasi</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">📋 Syarat & Ketentuan</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
                            <p>&copy; 2024 DevCode Indonesia. All rights reserved. Made with ❤️ for Indonesian Developers 🇮🇩</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}