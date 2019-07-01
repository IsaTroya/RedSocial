# RedSocial
**1**. Subir el proyecto al github utilizando los comando :
-	**git init**
- 	**git add**
-	**git status**
-	**git commit -m-""**
-	**git remote add origin "direccion de donde esta creado el proyecto del gitHub"**
-	**git push origin master** 
  
y con estos comando se sube el proyecto a GitHub, en el caso de que no funcione el push
probrar utilizando los siguientes comandos: 
  
-	**git fetch**
-	**git rebase origin/master**
-	**git push origin master**
**2**. Seguidamente inicializar git flow
**3**. Crear las ramas y dejar los nombre por defecto 
**4**. Utilizar el comando git branch para visualizar nuestras ramas 
**5**. Para cambiar de rama utilizaremos git checkout <"nombre de la rama">
**6**. Los colaboradores para poder realizar cambios deben clonar el gitHub, utilizando el comando: git clone <"copiar el SHH del GitHub">
**7**. Una vez clonado, se realizaran los cambios necesarios.
**8**. Realizados los cambios, en consola digitamos el comando git add .
**9**. Utilizaremos el comando git status, para ver lo que se va a guardar; en caso de que salga error este sera porque en a consola no estamos dentro
de la carpeta clonada, la cual se crea dentro del proyecto que ya teniamos, para ingresar a ella solo digitamos: cd <"Nombre de la carpeta">
**10**. Luego de ver el estado, agregamos el commit para poder subir al repositorio usando: git commit -m "descripcion necesaria"
**11**. Digitalizar git push; para que se guarde en el github
**12**. Dependiendo la rama que se haya subido, la rama master se encargara de la extraccion para que pertenezcan a la misma.
Cada que se requiera hacer un cambio se clonara el proyecto de GitHub (por los cambios que pueden haber hecho los demas participantes)
luego de clonarlo se realizan los cambios necesarios y se sube de nuevo al git hub obteniendo asi los commits
