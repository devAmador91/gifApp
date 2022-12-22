import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  test('Debe setear el estado inicial a pokemon', () => { 
    
    render(<GifExpertApp/>);
    expect(screen.getByText("pokemon"));
    
    

   });
});
