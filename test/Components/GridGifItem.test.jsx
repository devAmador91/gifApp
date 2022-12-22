import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/Components/GifGridItem";

describe("Prueba en <GridGifItem/>", () => {
  const title = "Pokemon 2000";
  const url = "https://media.tenor.com/R1KctPuHA8sAAAAd/miedo-perro.gif";
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifGridItem title={title} url={url} />);
    //--> Sirve para visualizar el HTML screen.debug();

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Debe mostrar el titulo en el componente', () => {

    render(<GifGridItem title={title} url={url}/>);
    expect(screen.getByText(title)).toBeTruthy();

   })
});
