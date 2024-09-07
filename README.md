ATENÇÃO: no Vercel, diminua o zoom da página para melhorar a experiência...

# Moedas do Brasil: Uma Jornada Histórica

## Descrição
Este projeto web permite que você explore a história das moedas brasileiras. Ao inserir um ano, a aplicação busca em uma base de dados e exibe informações sobre a moeda vigente naquele período, como nome, símbolo, período de validade e links para mais detalhes.

## Tecnologias Utilizadas
* **HTML:** Estrutura da página.
* **CSS:** Estilização da página.
* **JavaScript:** Lógica para buscar e exibir as informações das moedas.

## Como Usar
1. **Clone o repositório:**
   ```bash
   git clone 
   ```
2. **Abra o arquivo HTML:**
   Abra o arquivo `index.html` em seu navegador web preferido.
3. **Insira o ano:**
   Digite o ano desejado no campo de pesquisa e clique no botão "Pesquisar".
4. **Visualize os resultados:**
   Os resultados da pesquisa serão exibidos abaixo do campo de pesquisa, com informações sobre a moeda vigente naquele ano, incluindo imagem, período de validade e links para mais detalhes.

## Estrutura dos Dados
Os dados das moedas estão armazenados em um array JavaScript, onde cada objeto representa uma moeda e contém informações como:
* **moedaCorrente:** Nome da moeda.
* **simbolo:** Símbolo da moeda.
* **imagem:** Link para a imagem da moeda.
* **link:** Link para mais informações sobre a moeda.
* **periodoValidade:** Objeto com as datas de início e fim da validade da moeda.
* **fundamentoLegal:** Lei que instituiu a moeda.
* **equivalencia:** Equivalência com outras moedas.
* **fatorConversao:** Fator de conversão para cálculos.

## Contribuições
Contribuições são bem-vindas! Se você encontrar algum erro ou quiser adicionar novas funcionalidades, sinta-se à vontade para abrir um pull request.

## Fontes de Dados
* **Banco Central do Brasil:** https://www.bcb.gov.br/
* **Ipeadata:** http://www.ipeadata.gov.br/Default.aspx

## Licença
FREE - enjoy!

## Autor
Marcelo Dias Ferraretto - https://github.com/marcelodf0

## Agradecimentos
* Alura - Pela plataforma de aprendizado e a imersão em desenvolvimento web.

**Observações e Melhorias:**
* **Imagens:** Certifique-se de que as imagens das moedas estão no diretório correto e que os caminhos estão corretos no código JavaScript.
* **Dados:** A base de dados de moedas pode ser expandida e aprimorada com mais informações.
* **Design:** Personalize o estilo da página utilizando CSS para criar uma interface mais atraente.
* **Funcionalidades Adicionais:** Considere adicionar funcionalidades como:
    * Filtros para pesquisar por período, nome da moeda, etc.
    * Gráficos para visualizar a evolução das moedas ao longo do tempo.
    * Conversor de moedas entre diferentes períodos.

