import { GifGrid } from "../../src/Components/GifGrid";
import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "Linux";
  test("Debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe mostrar items cuando se cargan las imagenes useFetchGifs", () => {

    const gifs = [
      {
        id: "ABC",
        title: "Linux",
        url: "https://localhost/linux",
      },
      {
        id: "DFG",
        title: "Gato",
        url: "https://localhost/gato",
      },
    ];

    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false,
      });


    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);  
  });
});
