import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useSound } from '@/hooks/useSound';

export const SoundToggle = () => {
  const { isEnabled, toggle, play } = useSound();

  const handleToggle = () => {
    if (!isEnabled) {
      play('notification');
    }
    toggle();
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="relative overflow-hidden transition-all duration-300 hover:scale-110"
      title={isEnabled ? 'Выключить звук' : 'Включить звук'}
    >
      {isEnabled ? (
        <Icon name="Volume2" size={18} className="transition-all duration-300" />
      ) : (
        <Icon name="VolumeX" size={18} className="text-muted-foreground transition-all duration-300" />
      )}
      {isEnabled && (
        <span className="absolute inset-0 bg-primary/10 animate-pulse rounded-md" />
      )}
    </Button>
  );
};
