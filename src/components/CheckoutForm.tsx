import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, Send } from "lucide-react";
import { toast } from "sonner";

interface CheckoutFormProps {
  onBack: () => void;
}

const RESTAURANT_PHONE = "5511999999999"; // Número do restaurante (alterar conforme necessário)
const WEBHOOK_URL = "https://n8n.autoia.store/webhook/0df3e9c8-8e90-47de-b330-fe423647cf16";

export const CheckoutForm = ({ onBack }: CheckoutFormProps) => {
  const { items, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    paymentMethod: "",
    observation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name || !formData.phone || !formData.address || !formData.neighborhood) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // Formatar mensagem do pedido
    let message = `🍔 *NOVO PEDIDO - Cardápio Digital*\n\n`;
    message += `👤 *Cliente:* ${formData.name}\n`;
    message += `📱 *Telefone:* ${formData.phone}\n\n`;
    
    message += `📍 *Endereço de Entrega:*\n`;
    message += `${formData.address}, ${formData.number}\n`;
    if (formData.complement) message += `${formData.complement}\n`;
    message += `Bairro: ${formData.neighborhood}\n\n`;
    
    message += `🛍️ *Itens do Pedido:*\n`;
    items.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\n💰 *Total: R$ ${total.toFixed(2)}*\n\n`;
    
    if (formData.paymentMethod) {
      message += `💳 *Forma de Pagamento:* ${formData.paymentMethod}\n`;
    }
    
    if (formData.observation) {
      message += `\n📝 *Observações:* ${formData.observation}\n`;
    }

    // Criar link do WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_PHONE}?text=${encodedMessage}`;

    // Enviar dados do pedido para o webhook
    const orderData = {
      cliente: {
        nome: formData.name,
        telefone: formData.phone,
        endereco: `${formData.address}, ${formData.number}`,
        complemento: formData.complement,
        bairro: formData.neighborhood,
      },
      itens: items.map((item) => ({
        nome: item.name,
        quantidade: item.quantity,
        precoUnitario: item.price,
        subtotal: item.price * item.quantity,
      })),
      total,
      formaPagamento: formData.paymentMethod,
      observacoes: formData.observation,
      dataHora: new Date().toISOString(),
    };

    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    }).catch((err) => console.error("Erro ao enviar webhook:", err));

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");

    // Limpar carrinho e mostrar confirmação
    toast.success("Pedido enviado com sucesso!");
    setTimeout(() => {
      clearCart();
      onBack();
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Button
        type="button"
        variant="ghost"
        onClick={onBack}
        className="mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar ao carrinho
      </Button>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Nome completo *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Telefone/WhatsApp *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            required
          />
        </div>

        <div>
          <Label htmlFor="address">Endereço *</Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Rua, Avenida..."
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="number">Número *</Label>
            <Input
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="123"
              required
            />
          </div>
          <div>
            <Label htmlFor="complement">Complemento</Label>
            <Input
              id="complement"
              name="complement"
              value={formData.complement}
              onChange={handleChange}
              placeholder="Apto, Bloco..."
            />
          </div>
        </div>

        <div>
          <Label htmlFor="neighborhood">Bairro *</Label>
          <Input
            id="neighborhood"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            placeholder="Seu bairro"
            required
          />
        </div>

        <div>
          <Label htmlFor="paymentMethod">Forma de Pagamento</Label>
          <Input
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            placeholder="Dinheiro, PIX, Cartão..."
          />
        </div>

        <div>
          <Label htmlFor="observation">Observações</Label>
          <Textarea
            id="observation"
            name="observation"
            value={formData.observation}
            onChange={handleChange}
            placeholder="Alguma observação sobre o pedido?"
            rows={3}
          />
        </div>
      </div>

      <div className="pt-4 space-y-2">
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span className="text-success">R$ {total.toFixed(2)}</span>
        </div>
        <Button
          type="submit"
          className="w-full bg-success hover:bg-success/90 text-success-foreground"
          size="lg"
        >
          <Send className="w-5 h-5 mr-2" />
          Enviar Pedido via WhatsApp
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          Você será redirecionado para o WhatsApp para confirmar o pedido
        </p>
      </div>
    </form>
  );
};
