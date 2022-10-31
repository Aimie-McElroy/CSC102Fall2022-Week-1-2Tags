#sample UML diagram for CSC102 by Aimie McElroy<br>
#AIMMCELR@uat.edu

Create a diagram with 2 classes. Those classes need 3 attributes, 3 method
```mermaid
    classDiagram
    class Shape{
        -length
        -width
        +getLength()
        +setLength()
        +getWidth()
        +setWidth()
    }

    class ShapeSig{
        -length : int
        -width : int
        +getLength() : int
        +setLength(n : int) : void
        +getWidth() : int
        +setWidth(n : int) : void
    }

```
Attributes come before properties or methods<br>
/+ public /- private /# protected

```mermaid
    classDiagram
    class Superclass{
    }

    class Subclass1{
    }

    class Subclass2{
    }

    Superclass <|-- Subclass1
    Superclass <|-- Subclass2