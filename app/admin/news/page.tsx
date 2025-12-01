import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

export default function NewsPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Manajemen Berita</h1>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Berita
                </Button>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-gray-500">Daftar berita akan ditampilkan di sini.</p>
            </div>
        </div>
    );
}
