# 🏥 Lor Hospital - Qulaq Burun Boğaz və Baş-Boyun Mərkəzi

1. **macOS İstifadəçiləri üçün Xüsusi Addım** ⚠️
```bash
# Quarantine atributunu silin
xattr -dr com.apple.quarantine .

## 🚀 Quraşdırma

### Tələblər

- Node.js 18+ 
- **Bun** (tövsiyə edilir) və ya npm/yarn/pnpm

### Bun quraşdırması
```bash
# macOS və Linux
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Addımlar

1. **Repository-ni klonlayın**
```bash
git clone https://github.com/MinayeAliyeva/l-Hospital
cd lor-hospital
```

2. **macOS İstifadəçiləri üçün Xüsusi Addım** ⚠️
```bash
# Quarantine atributunu silin
xattr -dr com.apple.quarantine .
```

3. **Asılılıqları quraşdırın**
```bash
bun install
```

4. **Development serverini işə salın**
```bash
bun dev
# və ya
bun run dev
```

Tətbiqi açın: [http://localhost:3000](http://localhost:3000)

## 📖 İstifadə

### Development
```bash
# Development mode
bun dev
```

### Komputerine bun yuklenmeyibse Alternativ Package Manager-lər
```bash
# npm ilə
npm install
npm run dev

# yarn ilə
yarn install
yarn dev

# pnpm ilə
pnpm install
pnpm dev
```