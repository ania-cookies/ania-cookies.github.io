# cookies
Website about cookies

#Funkcje na stronie:
-logo strony (tort) podlega skalowaniu, jest to czcionka z obrazkiem; kliknięcie odsyła do strony głównej
-menu - do wyboru przepisy na ciasta, tarty i desery oraz galeria; po zmniejszeniu okna przeglądarki pojawia się przycisk rozwijający menu
##Na stronie głównej index.html:
-opis poszczególnych deserów rozwijamy za pomocą '+' przy nazwie deseru, zwijamy '-'
-kliknięcie na zdjęcie deseru przenosi nas do odpowiedniego przepisu, na odpowiedniej stronie
##Na stronach z przepisami (ciasta.html, tarty.html, desery.html):
-po kliknięciu na dany napis, odnoszący się do skadników potrzebnych do przygotowania deseru wyróżniamy go kolorem, następnie po kliknięcu "Stwórz listę zakupów" na dole strony pojawia się lista wyróżnionych przez nas składników
-jeśli znajdujemy się na dole strony możemy użyć przyciku ze strzałką, aby przejść do góry strony
##Galeria (galeria.html):
-galeria stworzona za pomocą Bootstrap Carousel

#Utworzenie repozytorium na github:
-Create new...-> New organization o nazwie ania-cookies.github.io
-Create new...-> New repository o nazwie ania-cookies.github.io
git clone git@github.com:ania-cookies/ania-cookies.github.io.git
cd ania-cookies.github.io
git add .
git commit -m "Initial commit" 
git remote add origin git@github.com:ania-cookies/ania-cookies.github.io.git
git push -u origin master
(krok po kroku https://pages.github.com/)
#Zmiany w projekcie:
git add .
git commit -m "[Komentarz]"
git push origin master


