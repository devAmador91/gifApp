import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/Components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    //Probar que el evento funcione y cambie el estado
    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");

    //screen.debug();
  });

  test("Debe de llamar onAddCategory si el imput tiene un valor", () => {
    const inputValue = 'Saitama';
    //Emulamos el envio de una funcion al componente
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    //Obtenemos la referencia de el elemento input y form
    const input = screen.getByRole("textbox");
    const form = screen.getByRole('form');
    //Utilizamos las referencias anteriores para probar los eventos
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit( form );
    //screen.debug();
    //Evaluamos que el estado del input este vacio despues del evento submit
    expect(input.value).toBe('');
    //Evalua que la funcion se llame
    expect(onNewCategory).toHaveBeenCalled();
    //Evalua que la funcion se llame una sola vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    //Evalua que la llamada a la fucion sea con el parametro 'Saitama'
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('No debe de llamar en onNewCategory si el input está vació', () => { 

    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole('form');
    fireEvent.submit( form );
    expect(onNewCategory).toHaveBeenCalledTimes(0);
   })
});
